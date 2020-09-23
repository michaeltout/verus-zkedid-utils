"use strict";

/* eslint-disable */
var toUInt8Buffer = function toUInt8Buffer(n) {
  var uInt8 = new Buffer.alloc(1);
  uInt8.writeUInt8(n, 0);
  return uInt8;
};

var toUInt16Buffer = function toUInt16Buffer(n) {
  var uInt16 = new Buffer.alloc(2);
  uInt16.writeUInt16BE(n, 0);
  return uInt16;
};

var toUInt32Buffer = function toUInt32Buffer(n) {
  var uInt32 = new Buffer.alloc(4);
  uInt32.writeUInt32BE(n, 0);
  return uInt32;
};

var toUInt64Buffer = function toUInt64Buffer(n) {
  var uInt64 = new Buffer.alloc(8);
  uInt64.writeBigUInt64BE(BigInt(n), 0);
  return uInt64;
};

var fromUInt16Buffer = function fromUInt16Buffer(b) {
  return b.readUInt16BE(0);
};

var fromUInt32Buffer = function fromUInt32Buffer(b) {
  return b.readUInt32BE(0);
};

var fromUInt64Buffer = function fromUInt64Buffer(b) {
  return Number(b.readBigUInt64BE(0));
};

var fromUInt8Buffer = function fromUInt8Buffer(b) {
  return b.readUInt8(0);
};

var fromUIntBuffer = function fromUIntBuffer(b, bytes) {
  switch (bytes) {
    case 1:
      return fromUInt8Buffer(b);

    case 2:
      return fromUInt16Buffer(b);

    case 4:
      return fromUInt32Buffer(b);

    case 8:
      return fromUInt64Buffer(b);

    default:
      break;
  }
};

var toUIntBuffer = function toUIntBuffer(b, bytes) {
  switch (bytes) {
    case 1:
      return toUInt8Buffer(b);

    case 2:
      return toUInt16Buffer(b);

    case 4:
      return toUInt32Buffer(b);

    case 8:
      return toUInt64Buffer(b);

    default:
      break;
  }
};

module.exports = {
  toUInt16Buffer: toUInt16Buffer,
  toUInt32Buffer: toUInt32Buffer,
  toUInt8Buffer: toUInt8Buffer,
  fromUInt16Buffer: fromUInt16Buffer,
  fromUInt32Buffer: fromUInt32Buffer,
  fromUInt8Buffer: fromUInt8Buffer,
  fromUIntBuffer: fromUIntBuffer,
  toUIntBuffer: toUIntBuffer,
  toUInt64Buffer: toUInt64Buffer,
  fromUInt64Buffer: fromUInt64Buffer
};