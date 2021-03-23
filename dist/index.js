"use strict";

var _app = _interopRequireDefault(require("./common/core/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.server.listen(process.env.PORT, function () {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Server sendo iniciado com a porta: ${process.env.PORT}`);
});