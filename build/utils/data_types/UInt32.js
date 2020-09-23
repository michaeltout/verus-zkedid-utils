"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../numbers'),
    toUInt32Buffer = _require.toUInt32Buffer;

var _require2 = require('../constants/index'),
    MAX_UINT32 = _require2.MAX_UINT32;

var UInt32 = /*#__PURE__*/function () {
  /**
   * Defines the prototype of an unsigned 32 bit buffer
   */
  function UInt32(key) {
    _classCallCheck(this, UInt32);

    this.key = key;
    this.byteLength = 4;
  }

  _createClass(UInt32, [{
    key: "create",
    value: function create(_int) {
      if (!isNaN(_int) && _int <= MAX_UINT32 && _int >= 0 && Number.isInteger(_int)) {
        return {
          data: _int,
          buffer: toUInt32Buffer(_int)
        };
      } else {
        throw new Error("Could not create UInt32 buffer, bad input.");
      }
    }
  }]);

  return UInt32;
}();

module.exports = UInt32;