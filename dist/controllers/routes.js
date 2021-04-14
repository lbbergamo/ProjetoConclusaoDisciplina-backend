"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./cepAdapter/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = _express.default.Router();

const cep = new _index.default();
routes.use(function (req, res, next) {
  if (req.headers.authorization !== process.env.AUTHORIZATION) {
    res.status(401).json({
      message: 'Unauthorized',
      info: 'Contact the developer'
    });
  } else {
    next();
  }
}); // eslint-disable-next-line @typescript-eslint/no-misused-promises

routes.post('/cep', cep.post);
var _default = routes;
exports.default = _default;