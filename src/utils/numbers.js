const toUInt8Buffer = (n) => {
  let uInt8 = new Buffer.alloc(1)
  uInt8.writeUInt8(n, 0)

  return uInt8
}

const toUInt16Buffer = (n) => {
  let uInt16 = new Buffer.alloc(2)
  uInt16.writeUInt16BE(n, 0)

  return uInt16
}

const toUInt32Buffer = (n) => {
  let uInt32 = new Buffer.alloc(4)
  uInt32.writeUInt32BE(n, 0)

  return uInt32
}

const fromUInt16Buffer = (b) => {
  return b.readUInt16BE(0)
}

const fromUInt32Buffer = (b) => {
  return b.readUInt32BE(0)
}

const fromUInt8Buffer = (b) => {
  return b.readUInt8(0)
}

const fromUIntBuffer = (b, bytes) => {
  switch (bytes) {
    case 1:
      return fromUInt8Buffer(b)
    case 2:
      return fromUInt16Buffer(b)
    case 4:
      return fromUInt32Buffer(b)
    default:
      break;
  }
}

const toUIntBuffer = (b, bytes) => {
  switch (bytes) {
    case 1:
      return toUInt8Buffer(b)
    case 2:
      return toUInt16Buffer(b)
    case 4:
      return toUInt32Buffer(b)
    default:
      break;
  }
}

module.exports = {
  toUInt16Buffer,
  toUInt32Buffer,
  toUInt8Buffer,
  fromUInt16Buffer,
  fromUInt32Buffer,
  fromUInt8Buffer,
  fromUIntBuffer,
  toUIntBuffer
}