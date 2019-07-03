"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("./controller/path.js");

var _links = require("./controller/links.js");

var _validate = require("./controller/validate.js");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    let arrMds = (0, _path.flatten)((0, _path.getMarkdownFiles)((0, _path.absolutePath)(path)));
    let arr = [];
    arrMds.forEach(pathFile => {
      let links = (0, _links.extractLinks)(pathFile);
      arr.push(links);
    });
    let arrayLinks = (0, _path.flatten)(arr);

    if (!options || options.validate === false) {
      resolve(arrayLinks);
    } else if (options && options.validate === true) {
      (0, _validate.validateLinks)(arrayLinks).then(resolve);
    } else {
      reject(new Error(''));
    }
  });
};

exports.mdLinks = mdLinks;