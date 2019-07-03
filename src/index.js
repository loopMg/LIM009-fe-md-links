import {
	absolutePath,
	getMarkdownFiles,
	flatten
} from "./controller/path.js";
import {
	extractLinks
} from "./controller/links.js";
import {
	validateLinks
} from './controller/validate.js'


export const mdLinks = (path, options) => {
	return new Promise((resolve, reject) => {
		let arrMds = flatten(getMarkdownFiles(absolutePath(path)));
		let arr = []
		arrMds.forEach((pathFile) => {
			let links = extractLinks(pathFile)
			arr.push(links)
		});

		let arrayLinks = flatten(arr);

		if (!options || options.validate === false) {
			resolve(arrayLinks)

		} else if (options && options.validate === true) {
			validateLinks(arrayLinks)
				.then(resolve)
		} else {
			reject(new Error(''));
		}
	});
}
