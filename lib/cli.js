#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.becomeObjet = exports.args = void 0;

var _index = require("./index.js");

const [,, ...args] = process.argv;
exports.args = args;
const path = args[0];
const options = args.slice(1);

const becomeObjet = arrayOp => {
  let validate = false;
  let stats = false;
  arrayOp.forEach(option => {
    if (option === '--validate') {
      validate = true;
      return validate;
    }

    if (option === '--stats') {
      stats = true;
      return stats;
    }
  });
  return {
    validate,
    stats
  };
};

exports.becomeObjet = becomeObjet;
const objet = becomeObjet(options);

const cli = (path, objet) => {
  console.log(path);

  if (path !== 0) {
    console.log(objet);
    return (0, _index.mdLinks)(path, objet).then(links => console.log(links)).catch(error => console.log('El Archivo o directorio no existe'));
  }
};

cli(path, objet);