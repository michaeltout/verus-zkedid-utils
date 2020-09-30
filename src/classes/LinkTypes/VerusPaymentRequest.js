const {
  VERUS_PAYMENT_REQUEST_HASH,
  VERUS_PAYMENT_REQUEST,
  VERUS_PAYMENT_REQUEST_PAYLOAD,
  VERUS_PAYMENT_REQUEST_PAYLOAD_HASH,
  VERUS_PAYMENT_REQUEST_VERSION,
  INVALID_SM_PARAMS
} = require('../../utils/constants/index');
const StructuredMemoError = require('../../utils/errors/StructuredMemoError');
const presetHashMap = require('../../utils/preset_hashes/index')
const { schemas } = presetHashMap
const { StructuredPrototypeType } = require('../../utils/data_types');

class VerusPaymentRequest {
  /**
   * @param {String} currency_id Verus network style currency id (e.g. .eth. or .bat.eth. or .vrsc)
   * @param {String} amount Amount of payment request in smallest currency delimination (e.g. satoshis)
   * @param {String} currency_import (optional) The currency import string for the currency being requested
   * @param {String} note (optional) a small note to display on the device that currency is being requested from
   */
  static create(currency_id, amount, currency_import = "", note = "") {
    if (currency_id == null)
      throw new StructuredMemoError(
        "Invalid Parameters",
        "Cannot create payment request from null or undefined currency id.",
        INVALID_SM_PARAMS
      );

    return {
      schema: [new StructuredPrototypeType(VERUS_PAYMENT_REQUEST)],
      data: {
        [VERUS_PAYMENT_REQUEST]: {
          schema: schemas[VERUS_PAYMENT_REQUEST_HASH],
          data: {
            version: VERUS_PAYMENT_REQUEST_VERSION,
            type: VERUS_PAYMENT_REQUEST,
            [VERUS_PAYMENT_REQUEST_PAYLOAD]: {
              schema: schemas[VERUS_PAYMENT_REQUEST_PAYLOAD_HASH],
              data: {
                currency_id,
                amount: amount || "",
                currency_import: currency_import || "",
                note: note || "",
              },
            },
          },
        },
      },
    };
  }
}

module.exports = VerusPaymentRequest