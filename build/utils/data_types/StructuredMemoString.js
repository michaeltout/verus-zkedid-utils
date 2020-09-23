"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../numbers'),
    toUInt16Buffer = _require.toUInt16Buffer;

var StructuredMemoString = /*#__PURE__*/function () {
  /**
   * Defines a generic memo data type of specified length
   */
  function StructuredMemoString(key) {
    _classCallCheck(this, StructuredMemoString);

    this.key = key;
    this.lengthFieldBytes = 2;
  }

  _createClass(StructuredMemoString, [{
    key: "create",
    value: function create(utf8Data) {
      var unmeasuredBuf = Buffer.from(utf8Data, 'utf8');
      return {
        data: utf8Data,
        buffer: Buffer.concat([toUInt16Buffer(Buffer.byteLength(unmeasuredBuf)), unmeasuredBuf])
      };
    }
  }]);

  return StructuredMemoString;
}();

module.exports = StructuredMemoString;