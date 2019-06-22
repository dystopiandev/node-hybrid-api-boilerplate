const path = require('path')
require('dotenv-flow').config({
  cwd: path.join(__dirname, '../'),
  purge_dotenv: true,
  default_node_env: 'development'
})

module.exports = {
  debug: (process.env.DEBUG === 'true'),
  server: Object.freeze({
    port: parseInt(process.env.PORT),
    saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS),
    sessionSecret: process.env.SESSION_SECRET,
    sessionLifetime: parseInt(process.env.SESSION_LIFETIME),
    allowedOrigins: process.env.ALLOWED_ORIGINS.split(',')
  }),
  redis: Object.freeze({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
    pass: process.env.REDIS_PASSWORD,
    ttl: parseInt(process.env.REDIS_TTL) / 1000
  })
}
