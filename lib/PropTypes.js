'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__styleValidator = undefined;
exports.configStyleValidator = configStyleValidator;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StyleValidator = require('./StyleValidator');

var _StyleValidator2 = _interopRequireDefault(_StyleValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __styleValidator = exports.__styleValidator = new _StyleValidator2.default();

function configStyleValidator(config) {
  __styleValidator.setConfig(config);
}

exports.default = {
  style: function style(props, propName, componentName) {
    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    var objErr = _propTypes2.default.object.apply(_propTypes2.default, [props, propName, componentName].concat(rest));
    if (objErr) {
      return objErr;
    }
    return __styleValidator.validate(props[propName], componentName);
  }
};