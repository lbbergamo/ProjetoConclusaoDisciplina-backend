"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _weatherMap = require("./services/weatherMap");

var _index = require("./services/geoMaps/index");

var _index2 = require("./services/infoCep/index");

/* eslint-disable @typescript-eslint/restrict-template-expressions */
class CepAdapter {
  async post(req, res) {
    try {
      const {
        cep
      } = req.body;
      if (cep.length < 8 || cep.toString().length < 8) return res.status(400).json({
        message: 'Invalid request'
      });
      const {
        addressFormat,
        data: Endereco
      } = await (0, _index2.receiveCep)(cep.toString().replace('-', ''));
      const {
        lat,
        lng
      } = await (0, _index.receiveGeoMaps)(addressFormat);
      const {
        weather,
        main
      } = await (0, _weatherMap.receiveWeatherMap)({
        lat,
        lng
      });
      const result = {
        Endereco,
        tempo: {
          status: weather[0].description,
          temperatura: main.temp
        },
        googleMaps: {
          latitude: lat,
          longitude: lng
        }
      };
      return res.json(result);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: error.message,
        erro: error
      });
    }
  }

}

var _default = CepAdapter;
exports.default = _default;