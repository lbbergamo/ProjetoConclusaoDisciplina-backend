"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _https = require("./../../common/core/https");

/* eslint-disable @typescript-eslint/restrict-plus-operands */
class InfoCep {
  async get(number) {
    return await (0, _https.getAdapter)({
      url: process.env.INFO_CEP_URL + `?cep=${number}`
    });
  }

}

var _default = new InfoCep();

exports.default = _default;