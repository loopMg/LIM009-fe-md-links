#!/usr/bin/env node

import { cli, becomeObject } from './controller/executor';

const [, , ...args] = process.argv
const path = args[0];
const options = args.slice(1);

const object = becomeObject(options)

cli(path, object)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))