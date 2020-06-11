const {
  STRUCTURED_COIN_OBJECT,
  STRUCTURED_COIN_OBJECT_VERSION,
  STRUCTURED_COIN_OBJECT_OPTIONS,
  STRUCTURED_COIN_OBJECT_AVAILABLE_MODES,
  STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES,
  STRUCTURED_COIN_OBJECT_OPTIONS_HASH,
  STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH,
  STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH,
  STRUCTURED_COIN_OBJECT_HASH
} = require('../../utils/constants/index')
const {
  StructuredPrototypeType,
} = require("../../utils/data_types/index");
const { schemas } = require('../../utils/preset_hashes/index')

class CoinObj {
  // Takes in an array of objects and creates an object to be passed to StructuredMemo
  static create(coinObj) {
    const { id, name, isPbaasChain, themeColor, options, available_modes } = coinObj

    return {
      schema: [new StructuredPrototypeType(STRUCTURED_COIN_OBJECT)],
      data: {
        [STRUCTURED_COIN_OBJECT]: {
          schema: schemas[STRUCTURED_COIN_OBJECT_HASH],
          data: {
            coinObj_version: STRUCTURED_COIN_OBJECT_VERSION,
            id: id || "",
            name: name || "",
            isPbaasChain: isPbaasChain != null ? isPbaasChain : false,
            themeColor: themeColor || "",
            [STRUCTURED_COIN_OBJECT_AVAILABLE_MODES]: {
              schema: schemas[STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH],
              data: {
                native:
                  available_modes != null && available_modes.native != null
                    ? available_modes.native
                    : false,
                electrum:
                  available_modes != null && available_modes.electrum != null
                    ? available_modes.electrum
                    : false,
                eth:
                  available_modes != null && available_modes.eth != null
                    ? available_modes.eth
                    : false,
              },
            },
            [STRUCTURED_COIN_OBJECT_OPTIONS]: {
              schema: schemas[STRUCTURED_COIN_OBJECT_OPTIONS_HASH],
              data: {
                [STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES]: {
                  schema: schemas[STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH],
                  data: {
                    darwin:
                      options != null &&
                      options.dirNames != null &&
                      options.dirNames.darwin != null
                        ? options.dirNames.darwin
                        : "",
                    linux:
                      options != null &&
                      options.dirNames != null &&
                      options.dirNames.linux != null
                        ? options.dirNames.linux
                        : "",
                    win32:
                      options != null &&
                      options.dirNames != null &&
                      options.dirNames.win32 != null
                        ? options.dirNames.win32
                        : "",
                  },
                },
                dustThreshold:
                  options != null && options.dustThreshold != null
                    ? options.dustThreshold
                    : 0,
                fallbackPort:
                  options != null && options.fallbackPort != null
                    ? options.fallbackPort
                    : 0,
                startupParams:
                  options != null && options.startupParams != null
                    ? options.startupParams
                    : '',
                daemon:
                  options != null && options.daemon != null
                    ? options.daemon
                    : '',
                customServers:
                  options != null && options.customServers != null
                    ? options.customServers
                    : '',
                tags:
                  options != null && options.tags != null
                    ? options.tags
                    : '',
                txFee:
                  options != null && options.txFee != null
                    ? options.txFee
                    : 0,
              },
            },
          },
        },
      },
    };
  }
}

module.exports = CoinObj