#!/usr/bin/env node
import { statsLinks , statsValidate } from '../lib/controller/stats.js';
import { mdLinks } from './index.js';
import { link } from 'fs';


export const [, , ...args] = process.argv
const path = args[0];
const options = args.slice(1);

// console.log(path);
// console.log(options);

// this function return object => { validate : true , stast : true };
export const becomeObjet = (arrayOp) => {
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

const objet = becomeObjet(options)


const cli = (path, objet) => {
	if(path && objet.validate && objet.stats)
	{
		return mdLinks(path, objet)
		.then(links => {
			let statsOK = statsLinks(links);
			let broken = statsValidate(links);
			console.log(`Brokens: ${broken}`);
			console.log(`${statsOK}`);
		})
	}
	if(path && objet.stats)
	{
		return mdLinks(path, objet)
		.then(links => {
			let stats = statsLinks(links);
			console.log(`${stats}`);
		})
	}
	else
	{
		return mdLinks(path, objet)
		.then(links => {console.log(links)})
		.catch(error => console.log(`File or Directory it dasen't exist! ${error}`));
	}
			// .catch(error => console.log(`File or Directory it dasen't exist! ${error}`));
		// return statsLinks()
	}
//console.log(path);
	// if(path !== 0)
	// {
	// 	console.log( objet)
	// 	return mdLinks(path, objet)
	// 		   	.then(links => console.log(links))
	// 		   	.catch(error => console.log('El Archivo o directorio no existe'));
	// }
//}

cli(path, objet);