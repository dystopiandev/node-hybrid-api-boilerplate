const path = require('path')
require('dotenv-flow').config({
  cwd: path.join(__dirname, '../'),
  purge_dotenv: true,
  default_node_env: 'development'
})

module.exports = {
  debug: (process.env.DEBUG === 'true'),
  server: Object.freeze({
    defaultPort: parseInt(process.env.SERVER_DEFAULT_PORT),
    saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS),
    sessionSecret: process.env.SESSION_SECRET,
    sessionLifetime: parseInt(process.env.SESSION_LIFETIME)
  })
}
