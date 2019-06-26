import {
	absolutePath,
	getMarkdownFiles,
	flatten
} from './path.js'
import {
	extractLinks
} from './links.js'
import fetch from 'node-fetch'
// const fetch = require('node-fetch');


//Ruta de prueba
const userRoute = '/home/maga/Desktop/Example/';
const arrFilesMd = flatten(getMarkdownFiles(absolutePath(userRoute)));

//Ruta de Archivo MD prueba 
const pathFile = arrFilesMd[2];

//Array de objetos con lindk en archivo MD
let arrlinks = extractLinks(pathFile);

// Solo la url
// let url = arrlinks[0].href;
// console.log(url)


export const validateLinks = (arrayLinks) => {
	const arrayPromesas = arrayLinks.map(link => {
		return fetch(link.href)
			.then((res) => {
				if (res.ok) {
					console.log({
						ref: link.href,
						text: link.text,
						path: link.path,
						status: res.status,
						statusText: res.statusText
					})
				} else {
					console.log({
						ref: link.href,
						text: link.text,
						path: link.path,
						status: res.status,
						statusText: 'Fail'
					})
				}
			})
	})
}


// fetch(url)
//   .then(checkStatus)
//   .catch((error)=>{
//     console.log({
//       url: url,
//       status: 500,
//       statusText: 'fail'
//     })
//     return {
//       url: url,
//       status: 500,
//       statusText: 'fail'
//     }
//   }
//   )