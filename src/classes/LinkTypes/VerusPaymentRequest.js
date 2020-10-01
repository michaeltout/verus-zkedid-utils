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
const { secure } = require('../../utils/strings');

class VerusPaymentRequest {
  /**
   * @param {String} currency_id Currency ID or address (i address or .name)
   * @param {String} system_id The i-address (if applicable) of the system used, or the .name of the system (e.g. .eth)
   * @param {String} display_name The name to display for this currency
   * @param {String} display_ticker The ticker to display for this currency
   * @param {String} destination The address or ID that the invoice is creates to
   * @param {String} amount Amount of payment request in smallest currency delimination (e.g. satoshis)
   * @param {String} currency_import (optional) The currency import string for the currency being requested
   * @param {{signer: String, signature: String}} sig_obj The data required to verify the coin import
   * @param {String} note (optional) a small note to display on the device that currency is being requested from
   */
  static create(
    currency_id,
    system_id,
    display_name,
    display_ticker,
    destination,
    amount,
    currency_import = "",
    sig_obj = {},
    note = ""
  ) {
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
                currency_id: secure(currency_id),
                amount: secure(amount),
                system_id: secure(system_id),
                display_name: secure(display_name),
                display_ticker: secure(display_ticker),
                destination: secure(destination),
                currency_import_signature: secure(sig_obj.signature),
                currency_import_signer: secure(sig_obj.signer),
                currency_import: secure(currency_import),
                note: secure(note),
              },
            },
          },
        },
      },
    };
  }
}

module.exports = VerusPaymentRequest