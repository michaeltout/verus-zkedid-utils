const {
  STRUCTURED_COIN_OBJECT,
  STRUCTURED_COIN_OBJECT_VERSION,
  STRUCTURED_COIN_OBJECT_HASH
} = require('../../utils/constants/index')
const {
  StructuredPrototypeType,
} = require("../../utils/data_types/index");
const { secure } = require("../../utils/strings");
const { schemas } = require('../../utils/preset_hashes/index')

class CoinObj {
  // Takes in an array of objects and creates an object to be passed to StructuredMemo
  static create(coinObj) {
    const {
      currency_id,
      system_id,
      display_name,
      display_ticker,
      available_protocols,
      dust_threshold,
      theme_color,
      electrum_servers,
      default_tx_fee,
    } = coinObj;

    return {
      schema: [new StructuredPrototypeType(STRUCTURED_COIN_OBJECT)],
      data: {
        [STRUCTURED_COIN_OBJECT]: {
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
          },
        },
      },
    };
  }
}

module.exports = CoinObj