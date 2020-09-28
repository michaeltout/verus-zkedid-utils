"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../../utils/constants/index'),
    STRUCTURED_COIN_OBJECT = _require.STRUCTURED_COIN_OBJECT,
    STRUCTURED_COIN_OBJECT_VERSION = _require.STRUCTURED_COIN_OBJECT_VERSION,
    STRUCTURED_COIN_OBJECT_OPTIONS = _require.STRUCTURED_COIN_OBJECT_OPTIONS,
    STRUCTURED_COIN_OBJECT_AVAILABLE_MODES = _require.STRUCTURED_COIN_OBJECT_AVAILABLE_MODES,
    STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES = _require.STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES,
    STRUCTURED_COIN_OBJECT_OPTIONS_HASH = _require.STRUCTURED_COIN_OBJECT_OPTIONS_HASH,
    STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH = _require.STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH,
    STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH = _require.STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH,
    STRUCTURED_COIN_OBJECT_HASH = _require.STRUCTURED_COIN_OBJECT_HASH;

var _require2 = require("../../utils/data_types/index"),
    StructuredPrototypeType = _require2.StructuredPrototypeType;

var _require3 = require('../../utils/preset_hashes/index'),
    schemas = _require3.schemas;

var CoinObj = /*#__PURE__*/function () {
  function CoinObj() {
    _classCallCheck(this, CoinObj);
  }

  _createClass(CoinObj, null, [{
    key: "create",
    // Takes in an array of objects and creates an object to be passed to StructuredMemo
    value: function create(coinObj) {
      var _data, _data2;

      var id = coinObj.id,
          name = coinObj.name,
          isPbaasChain = coinObj.isPbaasChain,
          themeColor = coinObj.themeColor,
          options = coinObj.options,
          available_modes = coinObj.available_modes,
          contractAddress = coinObj.contractAddress;
      return {
        schema: [new StructuredPrototypeType(STRUCTURED_COIN_OBJECT)],
        data: _defineProperty({}, STRUCTURED_COIN_OBJECT, {
          schema: schemas[STRUCTURED_COIN_OBJECT_HASH],
          data: (_data2 = {
            coinObj_version: STRUCTURED_COIN_OBJECT_VERSION,
            id: id || "",
            name: name || "",
            isPbaasChain: isPbaasChain != null ? isPbaasChain : false,
            themeColor: themeColor || ""
          }, _defineProperty(_data2, STRUCTURED_COIN_OBJECT_AVAILABLE_MODES, {
            schema: schemas[STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH],
            data: {
              "native": available_modes != null && available_modes["native"] != null ? available_modes["native"] : false,
              electrum: available_modes != null && available_modes.electrum != null ? available_modes.electrum : false,
              eth: available_modes != null && available_modes.eth != null ? available_modes.eth : false
            }
          }), _defineProperty(_data2, STRUCTURED_COIN_OBJECT_OPTIONS, {
            schema: schemas[STRUCTURED_COIN_OBJECT_OPTIONS_HASH],
            data: (_data = {}, _defineProperty(_data, STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES, {
              schema: schemas[STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH],
              data: {
                darwin: options != null && options.dirNames != null && options.dirNames.darwin != null ? options.dirNames.darwin : "",
                linux: options != null && options.dirNames != null && options.dirNames.linux != null ? options.dirNames.linux : "",
                win32: options != null && options.dirNames != null && options.dirNames.win32 != null ? options.dirNames.win32 : ""
              }
            }), _defineProperty(_data, "dustThreshold", options != null && options.dustThreshold != null ? options.dustThreshold : 0), _defineProperty(_data, "fallbackPort", options != null && options.fallbackPort != null ? options.fallbackPort : 0), _defineProperty(_data, "startupOptions", options != null && options.startupOptions != null ? options.startupOptions : ''), _defineProperty(_data, "daemon", options != null && options.daemon != null ? options.daemon : ''), _defineProperty(_data, "customServers", options != null && options.customServers != null ? options.customServers : ''), _defineProperty(_data, "contractAddress", options != null && options.contractAddress != null ? options.contractAddress : ''), _defineProperty(_data, "tags", options != null && options.tags != null ? options.tags : ''), _defineProperty(_data, "txFee", options != null && options.txFee != null ? options.txFee : 0), _data)
          }), _data2)
        })
      };
    }
  }]);

  return CoinObj;
}();

module.exports = CoinObj;