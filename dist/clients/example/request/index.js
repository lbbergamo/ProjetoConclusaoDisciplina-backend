"use strict";

var _https = _interopRequireDefault(require("../../../common/core/https"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExampleRequest {
  url = 'http://example.com';
  token = 'example-token'; // nunca deixar exporto no codigo

  authtoken = 'example-auth'; // nunca deixar exposto no codigo

  handler(parameters, parametersTwo) {
    const request = _https.default.request({
      url: this.url,
      type: 'GET',
      data: {
        parameters: parameters,
        parametersTwo: parametersTwo
      }
    });
  }

}