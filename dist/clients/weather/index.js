"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _https = require("../../common/core/https");

/* eslint-disable @typescript-eslint/restrict-plus-operands */
class Weather {
  async get(params) {
    return await (0, _https.getAdapter)({
      url: process.env.WEATHER_URL + '?lat=' + params.lat + '&lon=' + params.lng + '&appid=' + process.env.WEATHER_TOKEN + '&lang=pt_br&units=metric'
    });
  }

}

var _default = new Weather();

exports.default = _default;