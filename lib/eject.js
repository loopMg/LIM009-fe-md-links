"use strict";

var _cli = require("./cli.js");

(0, _cli.cli)(_cli.path, _cli.objet).then(res => console.log(res)).catch(err => console.log(err));