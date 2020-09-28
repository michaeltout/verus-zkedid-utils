"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../utils/constants/index'),
    VERUS_LINK = _require.VERUS_LINK,
    VERUS_LINK_HASH = _require.VERUS_LINK_HASH,
    VERUS_LINK_VERSION = _require.VERUS_LINK_VERSION;

var presetHashMap = require('../utils/preset_hashes/index');

var schemas = presetHashMap.schemas;

var StructuredPrototype = require('./StructuredPrototype/StructuredPrototype');

var VerusLink = /*#__PURE__*/function () {
  function VerusLink() {
    _classCallCheck(this, VerusLink);
  }

  _createClass(VerusLink, null, [{
    key: "create",
    value: function create() {
      var objects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return {
        schema: schemas[VERUS_LINK_HASH],
        data: {
          id: VERUS_LINK,
          version: VERUS_LINK_VERSION,
          objects: objects
        }
      };
    }
  }, {
    key: "writeBuffer",
    value: function writeBuffer(objects) {
      return StructuredPrototype.writeBuffer(VerusLink.create(objects));
    }
  }, {
    key: "readBuffer",
    value: function readBuffer(buf) {
      var hashMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return StructuredPrototype.readBuffer(buf, schemas[VERUS_LINK_HASH], {
        schemas: _objectSpread(_objectSpread({}, hashMap.schemas), presetHashMap.schemas),
        strings: _objectSpread(_objectSpread({}, hashMap.strings), presetHashMap.strings)
      });
    }
  }, {
    key: "writeLink",
    value: function writeLink(objects) {
      return VerusLink.writeBuffer(objects).toString('hex');
    }
  }, {
    key: "readLink",
    value: function readLink(link, hashMap) {
      return VerusLink.readBuffer(Buffer.from(link, 'hex'), hashMap);
    }
  }]);

  return VerusLink;
}();

module.exports = VerusLink;