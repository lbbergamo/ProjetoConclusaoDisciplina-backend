"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveWeatherMap = receiveWeatherMap;

var _index = _interopRequireDefault(require("../../../../clients/weather/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function receiveWeatherMap(params) {
  const {
    data,
    status
  } = await _index.default.get(params);
  if (status !== 200) throw new Error(`Erro - receiveWeatherMap - ${status}`);
  return data;
}