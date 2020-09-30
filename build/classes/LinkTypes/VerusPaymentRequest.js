"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../../utils/constants/index'),
    VERUS_PAYMENT_REQUEST_HASH = _require.VERUS_PAYMENT_REQUEST_HASH,
    VERUS_PAYMENT_REQUEST = _require.VERUS_PAYMENT_REQUEST,
    VERUS_PAYMENT_REQUEST_PAYLOAD = _require.VERUS_PAYMENT_REQUEST_PAYLOAD,
    VERUS_PAYMENT_REQUEST_PAYLOAD_HASH = _require.VERUS_PAYMENT_REQUEST_PAYLOAD_HASH,
    VERUS_PAYMENT_REQUEST_VERSION = _require.VERUS_PAYMENT_REQUEST_VERSION,
    INVALID_SM_PARAMS = _require.INVALID_SM_PARAMS;

var StructuredMemoError = require('../../utils/errors/StructuredMemoError');

var presetHashMap = require('../../utils/preset_hashes/index');

var schemas = presetHashMap.schemas;

var _require2 = require('../../utils/data_types'),
    StructuredPrototypeType = _require2.StructuredPrototypeType;

var _require3 = require('../../utils/strings'),
    secure = _require3.secure;

var VerusPaymentRequest = /*#__PURE__*/function () {
  function VerusPaymentRequest() {
    _classCallCheck(this, VerusPaymentRequest);
  }

  _createClass(VerusPaymentRequest, null, [{
    key: "create",

    /**
     * @param {String} currency_id Currency ID or address (i address or .name)
     * @param {String} system_id The i-address (if applicable) of the system used, or the .name of the system (e.g. .eth)
     * @param {String} display_name The name to display for this currency
     * @param {String} display_ticker The ticker to display for this currency
     * @param {String} amount Amount of payment request in smallest currency delimination (e.g. satoshis)
     * @param {String} currency_import (optional) The currency import string for the currency being requested
     * @param {{signer: String, signature: String}} sig_obj The data required to verify the coin import 
     * @param {String} note (optional) a small note to display on the device that currency is being requested from
     */
    value: function create(currency_id, system_id, display_name, display_ticker, amount) {
      var currency_import = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
      var sig_obj = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
      var note = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
      if (currency_id == null) throw new StructuredMemoError("Invalid Parameters", "Cannot create payment request from null or undefined currency id.", INVALID_SM_PARAMS);
      return {
        schema: [new StructuredPrototypeType(VERUS_PAYMENT_REQUEST)],
        data: _defineProperty({}, VERUS_PAYMENT_REQUEST, {
          schema: schemas[VERUS_PAYMENT_REQUEST_HASH],
          data: _defineProperty({
            version: VERUS_PAYMENT_REQUEST_VERSION,
            type: VERUS_PAYMENT_REQUEST
          }, VERUS_PAYMENT_REQUEST_PAYLOAD, {
            schema: schemas[VERUS_PAYMENT_REQUEST_PAYLOAD_HASH],
            data: {
              currency_id: currency_id,
              amount: secure(amount),
              system_id: secure(system_id),
              display_name: secure(display_name),
              display_ticker: secure(display_ticker),
              currency_import_signature: secure(sig_obj.signature),
              currency_import_signer: secure(sig_obj.signer),
              currency_import: secure(currency_import),
              note: secure(note)
            }
          })
        })
      };
    }
  }]);

  return VerusPaymentRequest;
}();

module.exports = VerusPaymentRequest;