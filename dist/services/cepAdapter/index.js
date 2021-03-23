"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class CepAdapter {
  async post(req, res) {
    const result = {
      statusCode: '200',
      CEP: '11040-010',
      Endereco: {
        logradouro: 'Rua Alexandre Fleming',
        bairro: 'Aparecida',
        localidade: 'Santos',
        uf: 'SP',
        cep: '11040010'
      },
      tempo: {
        status: 'chovendo',
        temperatura: '23'
      },
      googleMaps: {
        latitude: '-23.9736663',
        longitude: '-46.3105719'
      }
    };
    return res.json(result).status(200);
  }

}

var _default = CepAdapter;
exports.default = _default;