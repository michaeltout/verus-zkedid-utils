"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../numbers'),
    toUInt8Buffer = _require.toUInt8Buffer;

var Boolean = /*#__PURE__*/function () {
  /**
   * Defines the prototype of a boolean
   */
  function Boolean(key) {
    _classCallCheck(this, Boolean);

    this.key = key;
    this.byteLength = 1;
  }

  _createClass(Boolean, [{
    key: "create",
    value: function create(bool) {
      return {
        data: bool ? true : false,
        buffer: toUInt8Buffer(bool ? 1 : 0)
      };
    }
  }]);

  return Boolean;
}();

module.exports = Boolean;