"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StructuredPrototypeArray =
/**
 * Defines a generic structured prototype type
 */
function StructuredPrototypeArray(key) {
  _classCallCheck(this, StructuredPrototypeArray);

  this.key = key;
  this.sizeFieldBytes = 4;
  this.elementLengthFieldBytes = 2;
  this.elementTypeHashBytes = 20;
};

module.exports = StructuredPrototypeArray;