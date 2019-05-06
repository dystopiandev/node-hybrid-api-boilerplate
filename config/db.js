require('.')

module.exports = {
  'development': {
    'dialect': process.env.DB_DIALECT,
    'host': process.env.DB_HOST,
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_DATABASE
  },
  'staging': {
    'dialect': process.env.DB_DIALECT,
    'host': process.env.DB_HOST,
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_DATABASE
  },
  'production': {
    'dialect': process.env.DB_DIALECT,
    'host': process.env.DB_HOST,
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_DATABASE
  }
}
