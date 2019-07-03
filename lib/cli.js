#!/usr/bin/env node
"use strict";

var _executor = require("./controller/executor");

const [,, ...args] = process.argv;
const path = args[0];
const options = args.slice(1);
const object = (0, _executor.becomeObject)(options);
(0, _executor.cli)(path, object).then(res => console.log(res)).catch(err => console.log(err));