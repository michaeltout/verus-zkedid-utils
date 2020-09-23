"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../hash'),
    utf8ToHash160 = _require.utf8ToHash160;

var Hash160 = /*#__PURE__*/function () {
  /**
   * Defines a the prototype of a HASH160 20 byte hash
   * @param {String} key The data key for this hash
   */
  function Hash160(key) {
    _classCallCheck(this, Hash160);

    this.key = key;
    this.byteLength = 20;
  }

  _createClass(Hash160, [{
    key: "create",
    value: function create(utf8Data) {
      return {
        data: utf8Data,
        buffer: utf8ToHash160(utf8Data)
      };
    }
  }]);

  return Hash160;
}();

module.exports = Hash160;