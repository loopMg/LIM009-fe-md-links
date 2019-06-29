"use strict";

var _index = require("../index.js");

var _constants = require("constants");

const path = '/home/maga/Desktop/Example';
const options = {
  validate: false,
  stats: true
};
const arrayObjLinks = [{
  href: 'https://es.wikipedia.org/wiki/Annona_cherimola',
  text: 'link',
  path: '/home/maga/Desktop/Example/Prueba/forty/nameJuice.md'
}, {
  href: 'http://www.facebook.com>',
  text: 'link',
  path: '/home/maga/Desktop/Example/Prueba/test.md'
}, {
  href: 'https://github.com/loopMg/LIM009-fe-md-links',
  text: 'link',
  path: '/home/maga/Desktop/Example/Prueba/test.md'
}, {
  href: 'http://joedicastro.com',
  text: 'link',
  path: '/home/maga/Desktop/Example/example.md'
}, {
  href: 'http://joedicastro.com',
  text: 'link',
  path: '/home/maga/Desktop/Example/example.md'
}];

const stats = arrayObjLinks => {
  const array = arrayObjLinks.length;
  const allArray = `Total: ${array}`;
  console.log(allArray);
  let mySet = new Set();
  arrayObjLinks.forEach(element => {
    if (!mySet.has(element.href)) {
      return mySet.add(element.href);
    } else {
      return true;
    }
  });
  const myarray = Array.from(mySet);
  const uniqueLinks = myarray.length;
  const uniqueArray = `Unique: ${uniqueLinks}`;
  console.log(uniqueArray); // const mySet = new Set(arrayObjLinks);
  // if(mySet.has(value.href){}
  // mySet.forEach(value => {
  // 	let aje = value.href
  // 	mySet.has(value.href);
  // 	console.log('Set_', aje);
  // });
  // arrayObjLinks.forEach(element => {
  // 	let ajam = element.href;
  // 	console.log('Aja_', ajam);
  // });
  // console.log(totalLinks);
  // return totalLinks;
};

stats(arrayObjLinks);