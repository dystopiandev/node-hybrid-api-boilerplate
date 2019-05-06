function SimplifiedError (message) {
  const error = new Error(message)

  this.type = 'simplified'
  this.message = message || ''
  error.type = this.name
  this.stack = error.stack
}

SimplifiedError.prototype = Object.create(Error.prototype)

module.exports = SimplifiedError
