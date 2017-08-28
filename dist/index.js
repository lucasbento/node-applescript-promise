'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _applescript = require('applescript');

var _applescript2 = _interopRequireDefault(_applescript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var exec = function exec(type) {
  return function (script, args) {
    if (!args) {
      args = [];
    }

    var functionToCall = _applescript2.default.execFile;
    var functionParams = [script, args];
    if (type === 'string') {
      functionToCall = _applescript2.default.execString;
      functionParams = [script];
    }

    return new Promise(function (resolve, reject) {
      return functionToCall.apply(undefined, _toConsumableArray(functionParams).concat([function (error, response) {
        if (error) {
          return reject(error);
        }

        return resolve(response);
      }]));
    });
  };
};

exports.default = {
  execFile: exec('file'),
  execString: exec('string')
};