"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveGeoMaps = receiveGeoMaps;

var _index = _interopRequireDefault(require("../../../../clients/googleService/index"));

var _filterLocation = require("./filterLocation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function receiveGeoMaps(address) {
  try {
    const {
      data,
      status
    } = await _index.default.geocode(encodeURI(address));
    if (status !== 200) throw new Error('Erro - receiveGeoMaps');
    return (0, _filterLocation.filterLocation)(data);
  } catch (error) {
    throw Error('Erro no receiveGeoMaps');
  }
}