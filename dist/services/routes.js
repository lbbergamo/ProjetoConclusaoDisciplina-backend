"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("../services/cepAdapter/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = _express.default.Router();

const cep = new _index.default(); // eslint-disable-next-line @typescript-eslint/no-misused-promises

routes.post('/cep', cep.post);
var _default = routes;
exports.default = _default;