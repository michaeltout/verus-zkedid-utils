"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../../utils/constants/index'),
    STRUCTURED_COIN_OBJECT = _require.STRUCTURED_COIN_OBJECT,
    STRUCTURED_COIN_OBJECT_VERSION = _require.STRUCTURED_COIN_OBJECT_VERSION,
    STRUCTURED_COIN_OBJECT_HASH = _require.STRUCTURED_COIN_OBJECT_HASH;

var _require2 = require("../../utils/data_types/index"),
    StructuredPrototypeType = _require2.StructuredPrototypeType;

var _require3 = require("../../utils/strings"),
    secure = _require3.secure;

var _require4 = require('../../utils/preset_hashes/index'),
    schemas = _require4.schemas;

var CoinObj = /*#__PURE__*/function () {
  function CoinObj() {
    _classCallCheck(this, CoinObj);
  }

  _createClass(CoinObj, null, [{
    key: "create",
    // Takes in an array of objects and creates an object to be passed to StructuredMemo
    value: function create(coinObj) {
      var currency_id = coinObj.currency_id,
          system_id = coinObj.system_id,
          display_name = coinObj.display_name,
          display_ticker = coinObj.display_ticker,
          available_protocols = coinObj.available_protocols,
          dust_threshold = coinObj.dust_threshold,
          theme_color = coinObj.theme_color,
          electrum_servers = coinObj.electrum_servers,
          default_tx_fee = coinObj.default_tx_fee;
      return {
        schema: [new StructuredPrototypeType(STRUCTURED_COIN_OBJECT)],
        data: _defineProperty({}, STRUCTURED_COIN_OBJECT, {
          schema: schemas[STRUCTURED_COIN_OBJECT_HASH],
          data: {
            version: STRUCTURED_COIN_OBJECT_VERSION,
            id: STRUCTURED_COIN_OBJECT,
            currency_id: secure(currency_id),
            system_id: secure(system_id),
            display_name: secure(display_name),
            display_ticker: secure(display_ticker),
            available_protocols: secure(available_protocols),
            dust_threshold: secure(dust_threshold),
            theme_color: secure(theme_color),
            electrum_servers: secure(electrum_servers),
            default_tx_fee: secure(default_tx_fee)
          }
        })
      };
    }
  }]);

  return CoinObj;
}();

module.exports = CoinObj;