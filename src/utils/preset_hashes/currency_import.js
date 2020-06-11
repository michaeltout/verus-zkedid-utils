const { UInt32, StructuredMemoString, Boolean, StructuredPrototypeType } = require('../data_types/index')
const {
  STRUCTURED_COIN_OBJECT,
  STRUCTURED_COIN_OBJECT_OPTIONS,
  STRUCTURED_COIN_OBJECT_AVAILABLE_MODES,
  STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES,
  STRUCTURED_COIN_OBJECT_HASH,
  STRUCTURED_COIN_OBJECT_OPTIONS_HASH,
  STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH,
  STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH
} = require("../constants/index");

module.exports = {
  schemas: {
    [STRUCTURED_COIN_OBJECT_HASH]: [
      new UInt32("coinObj_version"),
      new StructuredMemoString("id"),
      new StructuredMemoString("name"),
      new UInt32("coinObj_version"),
      new Boolean("isPbaasChain"),
      new StructuredMemoString("themeColor"),
      new StructuredPrototypeType("available_modes"),
      new StructuredPrototypeType("options")
    ],
    [STRUCTURED_COIN_OBJECT_OPTIONS_HASH]: [
      new UInt32("dustThreshold"),
      new UInt32("fallbackPort"),
      new StructuredMemoString("startupParams"),
      new StructuredMemoString("daemon"),
      new StructuredMemoString("customServers"),
      new StructuredMemoString("tags"),
      new UInt32("txFee"),
      new StructuredPrototypeType("dirNames")
    ],
    [STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH]: [
      new Boolean("native"),
      new Boolean("electrum"),
      new Boolean("eth"),
    ],
    [STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH]: [
      new StructuredMemoString("darwin"),
      new StructuredMemoString("linux"),
      new StructuredMemoString("win32"),
    ]
  },
  strings: {
    [STRUCTURED_COIN_OBJECT_HASH]: STRUCTURED_COIN_OBJECT,
    [STRUCTURED_COIN_OBJECT_OPTIONS_HASH]: STRUCTURED_COIN_OBJECT_OPTIONS,
    [STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH]: STRUCTURED_COIN_OBJECT_AVAILABLE_MODES,
    [STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH]: STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES
  }
}