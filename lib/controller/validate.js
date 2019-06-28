"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//validate array of objet with Links 
const validateLinks = arrayLinks => {
  const arrayPromesas = arrayLinks.map(link => {
    return (0, _nodeFetch.default)(link.href).then(res => {
      if (res.ok) {
        return {
          ref: link.href,
          text: link.text,
          path: link.path,
          status: res.status,
          statusText: res.statusText
        };
      } else {
        return {
          ref: link.href,
          text: link.text,
          path: link.path,
          status: res.status,
          statusText: 'Fail'
        };
      }
    }).catch(() => {
      return {
        ref: link.href,
        text: link.text,
        path: link.path,
        status: undefined,
        statusText: 'Fail'
      };
    });
  });
  return Promise.all(arrayPromesas);
};

exports.validateLinks = validateLinks;