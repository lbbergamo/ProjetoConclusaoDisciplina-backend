"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdapter = getAdapter;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAdapter(options) {
  return await (0, _axios.default)({
    method: 'GET',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    url: options.url
  }).then(async response => {
    return {
      data: response.data,
      ...response
    };
  }, async error => {
    // console.log(error)
    throw error;
  });
}