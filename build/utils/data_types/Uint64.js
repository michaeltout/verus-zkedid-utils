"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../numbers'),
    toUInt64Buffer = _require.toUInt64Buffer;

var _require2 = require('../constants/index'),
    MAX_UINT64 = _require2.MAX_UINT64;

var UInt64 = /*#__PURE__*/function () {
  /**
   * Defines the prototype of an unsigned 32 bit buffer
   */
  function UInt64(key) {
    _classCallCheck(this, UInt64);

    this.key = key;
    this.byteLength = 8;
  }

  _createClass(UInt64, [{
    key: "create",
    value: function create(_int) {
      if (!isNaN(_int) && _int <= MAX_UINT64 && _int >= 0 && Number.isInteger(_int)) {
        return {
          data: _int,
          buffer: toUInt64Buffer(_int)
        };
      } else {
        throw new Error("Could not create UInt64 buffer, bad input.");
      }
    }
  }]);

  return UInt64;
}();

module.exports = UInt64;