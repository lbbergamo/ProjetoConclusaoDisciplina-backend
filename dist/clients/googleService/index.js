"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _https = require("./../../common/core/https");

/* eslint-disable @typescript-eslint/restrict-plus-operands */
class GoogleService {
  async geocode(address) {
    return await (0, _https.getAdapter)({
      url: process.env.GOOGLE_URL_GEOCODE + `json?address=${address}&key=` + process.env.GOOGLE_KEY
    });
  }

}

var _default = new GoogleService();

exports.default = _default;