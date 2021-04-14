"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveCep = receiveCep;

var _index = _interopRequireDefault(require("../../../../clients/infoCep/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable @typescript-eslint/restrict-template-expressions */
async function receiveCep(numberCep) {
  const {
    data,
    status
  } = await _index.default.get(numberCep);
  if (data.code !== 200) throw new Error(`Erro - receiveCep - ${data.code} - ${data.message}`);
  const result = data.result;
  return {
    addressFormat: `${result.logradouro} ${result.bairro} ${result.localidade} ${result.uf}`,
    data: result,
    response: data,
    statusCode: status
  };
}