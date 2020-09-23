"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StructuredPrototypeType =
/**
 * Defines a generic structured prototype type
 */
function StructuredPrototypeType(key) {
  _classCallCheck(this, StructuredPrototypeType);

  this.key = key;
  this.typeHashBytes = 20;
  this.lengthFieldBytes = 2;
};

module.exports = StructuredPrototypeType;