"use strict";

var _index = require("../index.js");

const path = '/home/maga/Desktop/Example';
const options = {
  validate: false,
  stats: true
};

const stats = (path, options) => {
  let arrayObjinfo = (0, _index.mdLinks)(path, options).then(res => {
    let numberlinks = res.length;
    console.log(`Total: ${numberlinks}`);
  });
  return arrayObjinfo;
};

stats(path, options); // // Utiliza el constructor para para crear un set con el mismo contenido que un array
// const mySet = new Set(arrayObjinfo);
// mySet.has('link'); // devuelve true
// // Utiliza la propagación para crear un array con los contenidos de un set
// console.log([...mySet]); // Muestra lo mismo utilizando myArray