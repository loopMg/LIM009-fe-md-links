"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = exports.becomeObject = void 0;

var _stats = require("./stats");

var _index = require("../index");

// this function return object => { validate : true , stast : true };
const becomeObject = arrayOp => {
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

exports.becomeObject = becomeObject;

const cli = (path, object) => {
  return (0, _index.mdLinks)(path, object).then(links => {
    if (object && object.validate && object.stats) {
      let statsOK = (0, _stats.statsLinks)(links);
      let broken = (0, _stats.statsValidate)(links);
      return `${statsOK} \n${broken}`;
    } else if (object && object.stats) {
      let stats = (0, _stats.statsLinks)(links);
      return `${stats}`;
    } else {
      // NO OPTION STATS  
      let string = '';

      if (object && !object.validate) {
        links.forEach(element => {
          return string += `${element.path} ${element.href} \n`;
        });
      } else {
        links.forEach(element => {
          return string += `${element.path} ${element.href} ${element.status} ${element.statusText} \n`;
        });
      }

      return string;
    }
  }).catch(error => `File or Directory it doesn't exist! ${error}`);
};

exports.cli = cli;