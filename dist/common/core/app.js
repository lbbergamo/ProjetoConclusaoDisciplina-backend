"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _http = require("http");

var _routes = _interopRequireDefault(require("../../services/routes"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv/config');

class App {
  app = (0, _express.default)();

  constructor() {
    this.ready();
    this.app.use((0, _cors.default)());
    this.app.use(_express.default.json());
    this.app.use(_routes.default);
  }

  ready() {
    this.server = (0, _http.createServer)(this.app);
  }

}

var _default = new App();

exports.default = _default;