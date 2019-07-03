import {
	statsLinks,
	statsValidate
} from './stats';

import {
	mdLinks
} from '../index';

// this function return object => { validate : true , stast : true };
export const becomeObject = (arrayOp) => {
	let validate = false;
	let stats = false;
	arrayOp.forEach((option) => {
		if (option === '--validate') {
			validate = true;
			return validate;

		}
		if (option === '--stats') {
			stats = true;
			return stats;
		}
	})
	return {
		validate,
		stats
	}
}

export const cli = (path, object) => {
	return mdLinks(path, object)
		.then(links => {
			if (object && object.validate && object.stats) {			
				let statsOK = statsLinks(links);
				let broken = statsValidate(links);
				return `${statsOK} \n${broken}`
			} else if (object && object.stats) {
				let stats = statsLinks(links);
				return `${stats}`
			} else { // NO OPTION STATS  
				let string = '';
				if (object && !object.validate) {
					links.forEach((element) => {
						return string += `${element.path} ${element.href} \n`;
					});
				} else {
					links.forEach((element) => {
						return string += `${element.path} ${element.href} ${element.status} ${element.statusText} \n`;
					})
				}
				return string;
			}
		})
		.catch(error => `File or Directory it doesn't exist! ${error}`);
}