"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hash160 = require('./Hash160');

var StructuredMemoString = require('./StructuredMemoString');

var UInt32 = require('./UInt32');

var Boolean = require('./Boolean');

var Uint64 = require('./Uint64');

var StructuredPrototypeType = require('./StructuredPrototypeType');

var StructuredPrototypeArray = require('./StructuredPrototypeArray');

var ObjectDataSchema =
/**
 * Defines a general schema for memo data
 */
function ObjectDataSchema() {
  var schemaArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  _classCallCheck(this, ObjectDataSchema);

  if (Array.isArray(schemaArray)) {
    schemaArray.forEach(function (element) {
      if (!(element instanceof Hash160 || element instanceof StructuredMemoString || element instanceof UInt32 || element instanceof StructuredPrototypeType || element instanceof Uint64 || element instanceof Boolean || element instanceof StructuredPrototypeArray)) {
        throw new Error(_typeof(element) + " is not supported schema data type.");
      }
    });
    this.order = schemaArray;
  } else throw new Error("Data schemas must be in array format.");
};

module.exports = ObjectDataSchema;