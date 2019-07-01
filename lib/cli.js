#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.becomeObjet = exports.args = void 0;

var _stats = require("../lib/controller/stats.js");

var _index = require("./index.js");

const [,, ...args] = process.argv;
exports.args = args;
const path = args[0];
const options = args.slice(1); // this function return object => { validate : true , stast : true };

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
  if (path && objet.validate && objet.stats) {
    return (0, _index.mdLinks)(path, objet).then(links => {
      let statsOK = (0, _stats.statsLinks)(links);
      let broken = (0, _stats.statsValidate)(links);
      console.log(`${statsOK}`);
      console.log(`${broken}`);
    });
  }

  if (path && objet.stats) {
    return (0, _index.mdLinks)(path, objet).then(links => {
      let stats = (0, _stats.statsLinks)(links);
      console.log(`${stats}`);
    });
  } else {
    return (0, _index.mdLinks)(path, objet).then(links => {
      if (!objet.validate) {
        links.forEach(element => {
          console.log(`${element.path} ${element.href}`);
        });
      } else {
        links.forEach(element => {
          console.log(`${element.path} ${element.href} ${element.status} ${element.statusText}`);
        });
      }
    }); //.catch(error => console.log(`File or Directory it dasen't exist! ${error}`));
    //})
  }
};

cli(path, objet);