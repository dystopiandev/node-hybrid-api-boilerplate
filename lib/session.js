const config = require('../config')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

const sessionInstance = session({
  store: new RedisStore({
    host: config.redis.host,
    port: config.redis.port,
    pass: config.redis.pass,
    ttl: config.redis.ttl,
    disableTTL: !config.redis.ttl
  }),
  secret: config.server.sessionSecret,
  resave: false,
  saveUninitialized: false
})

module.exports = sessionInstance
