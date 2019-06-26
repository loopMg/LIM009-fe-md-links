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


//Ruta de prueba
let userRoute = '/home/maga/Desktop/Example/';
// let userRouteTwo = 'example.md';


const mdLinks = (path, options) => {
	return new Promise((resolve, reject) => {
		if (path) 
		{
			let arrMds = flatten(getMarkdownFiles(absolutePath(path)));
			let arr = []
			arrMds.forEach((pathFile) => {
				let links = extractLinks(pathFile)
				arr.push(links)
			});
			let arrayLinks = flatten(arr);
			//resolve(arrayLinks)

			validateLinks(arrayLinks)
				.then(resolve)
		} 
		else 
		{
			reject('Bad path');
		}
	});
}

mdLinks(userRoute)
	.then(links => {
		console.log(links)
	})
	.catch((error) => {
		return error;
	})