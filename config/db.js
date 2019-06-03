require('.')

const config = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  ports: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: (process.env.DEBUG === 'true') ? console.log : false,
  define: {
    underscored: false,
    freezeTableName: true,
    charset: 'utf8mb4',
    dialectOptions: {
      collate: 'utf8mb4_general_ci'
    },
    timestaps: true
  },
  sync: { force: true }
}

module.exports = {
  development: config,
  staging: config,
  production: config
}
