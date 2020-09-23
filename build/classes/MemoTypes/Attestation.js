"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../../utils/constants/index'),
    STRUCTURED_ATTESTATION_VERSION = _require.STRUCTURED_ATTESTATION_VERSION,
    STRUCTURED_ATTESTATION = _require.STRUCTURED_ATTESTATION;

var _require2 = require('../../utils/data_types/index'),
    UInt32 = _require2.UInt32,
    Hash160 = _require2.Hash160,
    StructuredMemoString = _require2.StructuredMemoString,
    StructuredPrototypeType = _require2.StructuredPrototypeType;

var AttestationSchema = [new Hash160("type"), new UInt32("version"), new StructuredMemoString("data"), new StructuredMemoString("to"), new StructuredMemoString("from")];

var Attestation = /*#__PURE__*/function () {
  function Attestation() {
    _classCallCheck(this, Attestation);
  }

  _createClass(Attestation, null, [{
    key: "create",
    // Takes in an array of objects and creates an object to be passed to StructuredMemo
    value: function create(type, data, toId, fromId) {
      return {
        schema: [new StructuredPrototypeType(STRUCTURED_ATTESTATION)],
        data: _defineProperty({}, STRUCTURED_ATTESTATION, {
          schema: AttestationSchema,
          data: {
            type: type,
            version: STRUCTURED_ATTESTATION_VERSION,
            data: data,
            to: toId,
            from: fromId
          }
        })
      };
    }
  }]);

  return Attestation;
}();

module.exports = Attestation;