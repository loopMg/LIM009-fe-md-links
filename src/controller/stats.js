import {
	mdLinks
} from '../index.js'


const path = '/home/maga/Desktop/Example'
const options = { validate: false, stats : true }; 



const stats = (path, options) => {
	let arrayObjinfo = mdLinks(path, options).then(res => {let numberlinks = res.length
	console.log(`Total: ${numberlinks}`)});
	
	return arrayObjinfo
};

stats(path, options);

