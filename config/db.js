require('.')

const options = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    collate: 'utf8mb4_general_ci',
    useUTC: false, // for reading from database
    dateStrings: true,
    typeCast: true,
    timezone: '+00:00'
  },
  define: {
    underscored: false,
    freezeTableName: true,
    charset: 'utf8mb4',
    timestaps: false
  },
  logging: (process.env.DB_CONSOLE_LOGGING === 'true') ? console.log : false,
  timezone: '+00:00'
}

module.exports = {
  development: options,
  staging: options,
  production: options
}
