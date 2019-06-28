"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderer = new _marked.default.Renderer();

const extractLinks = route => {
  let readMarkDown = _fs.default.readFileSync(route).toString();

  let arr = [];

  renderer.link = (href, path, text) => {
    return arr.push({
      href: href,
      text: text,
      path: route
    });
  };

  (0, _marked.default)(readMarkDown, {
    renderer: renderer
  });
  return arr;
};

exports.extractLinks = extractLinks;