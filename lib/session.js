const config = require('../config')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const sessionInstance = session({
  store: new RedisStore(),
  secret: config.server.sessionSecret,
  resave: false,
  saveUninitialized: false
})

module.exports = sessionInstance
