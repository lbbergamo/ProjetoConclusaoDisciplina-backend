"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const request = async function request(options) {
  return await (0, _axios.default)(options).then(async response => {
    return response;
  }, async error => {
    throw error;
  });
};

exports.request = request;