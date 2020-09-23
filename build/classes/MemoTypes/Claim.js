"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../../utils/constants/index'),
    STRUCTURED_CLAIM_VERSION = _require.STRUCTURED_CLAIM_VERSION,
    STRUCTURED_CLAIM = _require.STRUCTURED_CLAIM;

var _require2 = require('../../utils/data_types/index'),
    StructuredPrototypeType = _require2.StructuredPrototypeType;

var _require3 = require('../../utils/preset_hashes/index'),
    schemas = _require3.schemas;

var _require4 = require('../../utils/hash'),
    utf8ToHash160 = _require4.utf8ToHash160;

var Claim = /*#__PURE__*/function () {
  function Claim() {
    _classCallCheck(this, Claim);
  }

  _createClass(Claim, null, [{
    key: "create",
    // Takes in an array of objects and creates an object to be passed to StructuredMemo
    value: function create(type, data, toId) {
      return {
        schema: [new StructuredPrototypeType(STRUCTURED_CLAIM)],
        data: _defineProperty({}, STRUCTURED_CLAIM, {
          schema: schemas[utf8ToHash160(STRUCTURED_CLAIM).toString('hex')],
          data: {
            type: type,
            version: STRUCTURED_CLAIM_VERSION,
            data: data,
            to: toId
          }
        })
      };
    }
  }]);

  return Claim;
}();

module.exports = Claim;