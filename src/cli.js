#!/usr/bin/env node
import { statsLinks , statsValidate } from '../lib/controller/stats.js';
import { mdLinks } from './index.js';

export const [, , ...args] = process.argv
const path = args[0];
const options = args.slice(1);

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


export const cli = (path, objet) => {
	if(path && objet.validate && objet.stats)
	{
		return mdLinks(path, objet)
		.then(links => {
			let statsOK = statsLinks(links);
			let broken = statsValidate(links);
			console.log(`${statsOK}`);
			console.log(`${broken}`);
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
		.then(links => {
			if(!objet.validate) 
			{
				links.forEach((element) => {
				console.log(`${element.path} ${element.href}`); 
			});
			}
			else 
			{
			links.forEach((element) => {
				console.log(`${element.path} ${element.href} ${element.status} ${element.statusText}`);
				})
			}
		})
		//.catch(error => console.log(`File or Directory it dasen't exist! ${error}`));
	//})
}	
}

cli(path, objet)