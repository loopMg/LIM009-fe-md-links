const fs = require('fs');
const path = require('path');

//const absolutePath = require ('absolutePath')

let userRoute = '/home/maga/Desktop/Example/';

//convert relative routes in absolutes routes return string
export const absolutePath = (route) => {
  if (!path.isAbsolute(route)) {
    return path.resolve(route);
  } else {
    return route;
  }
};
//absolutePath(userRoute)

//verify file and return boolean
export const verifyFile = (route) => {
  let getStat = fs.statSync(route);
  let isFile = getStat.isFile();
  return isFile;
}

//read Directories return Array files
export const getMarkdownFiles = (route) => {
  if (verifyFile(path.join(route))) {
    return path.extname(route) === ".md" ? route : [];
  } else {
    //console.log(route)
    const readDir = fs.readdirSync(path.join(route));
    return readDir.map(routeName => {
      //console.log("mundos_", routeName)
      const filesArray = getMarkdownFiles(path.join(route, routeName))
      return filesArray
    })
  }
}
//getMarkdownFiles(absolutePath(userRoute));

//flatten array 
export const flatten = (arr) => {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ret = ret.concat(flatten(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
}

// uglyArr = getMarkdownFiles(absolutePath(userRoute));
// let aplanau = flatten(uglyArr);
// console.log('Ass: ', aplanau)

