#!/usr/bin/env node

import {
	mdLinks
} from './index.js'

export const [, , ... args] = process.argv

const path = args[0];
const options = args.slice(1);


export const  becomeObjet = (arrayOp) => {
let validate = false;
let stats = false;
	arrayOp.forEach((option) => {
		if( option === '--validate' )
		{
			validate = true;
			return validate;
			
		}
		if ( option === '--stats' ) 
		{
			stats = true;
			return stats;
		}
	})
	return { validate, stats }
}

const objet = becomeObjet(options)

const cli = (path, objet) => {
	console.log(path);
	if(path !== 0)
	{
		console.log( objet)
		return mdLinks(path, objet)
			   	.then(links => console.log(links))
			   	.catch(error => console.log('El Archivo o directorio no existe'));
	}
}

cli(path, objet);


