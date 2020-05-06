class StructuredMemoError extends Error {
  constructor(message, data, code = -1) {
    super(message)
    this.message = message
    this.data = data
    this.code = code
  
    if ("captureStackTrace" in Error) Error.captureStackTrace(this, StructuredMemoError);
    else this.stack = new Error().stack;
  }
}

StructuredMemoError.prototype.name = "StructuredMemoError"

module.exports = StructuredMemoError