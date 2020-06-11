/* 
  This file holds all constants used in import encoding/decoding. 
  
  DO NOT EDIT CONSTANTS IF YOU DO NOT KNOW WHAT YOU ARE DOING. 
  
  Editing constants could result in hash values being different and 
  breaking the protocol.
*/

// Currency Import
const CURRENCY_IMPORT_IDENTIFIER = 'custom_currency:vrsc'
const CURRENCY_IMPORT_VERSION = 0

// Currency Import Children
const STRUCTURED_COIN_OBJECT = 'structured_coin_object:vrsc'
const STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES = 'dirNames'
const STRUCTURED_COIN_OBJECT_AVAILABLE_MODES = 'available_modes'
const STRUCTURED_COIN_OBJECT_OPTIONS = 'options'


module.exports = {
  CURRENCY_IMPORT_IDENTIFIER,
  CURRENCY_IMPORT_VERSION,
  STRUCTURED_COIN_OBJECT,
  STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES,
  STRUCTURED_COIN_OBJECT_AVAILABLE_MODES,
  STRUCTURED_COIN_OBJECT_OPTIONS
}