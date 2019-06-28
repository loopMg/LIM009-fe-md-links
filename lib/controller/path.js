"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = exports.getMarkdownFiles = exports.verifyFile = exports.absolutePath = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//convert relative routes in absolutes routes return string
const absolutePath = route => {
  if (!_path.default.isAbsolute(route)) {
    return _path.default.resolve(route);
  } else {
    return route;
  }
}; //verify file and return boolean


exports.absolutePath = absolutePath;

const verifyFile = route => {
  let getStat = _fs.default.statSync(route);

  let isFile = getStat.isFile();
  return isFile;
}; //read Directories return Array files


exports.verifyFile = verifyFile;

const getMarkdownFiles = route => {
  if (verifyFile(_path.default.join(route))) {
    return _path.default.extname(route) === ".md" ? route : [];
  } else {
    const readDir = _fs.default.readdirSync(_path.default.join(route));

    return readDir.map(routeName => {
      const filesArray = getMarkdownFiles(_path.default.join(route, routeName));
      return filesArray;
    });
  }
}; //flatten array 


exports.getMarkdownFiles = getMarkdownFiles;

const flatten = arr => {
  let ret = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ret = ret.concat(flatten(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }

  return ret;
};

exports.flatten = flatten;