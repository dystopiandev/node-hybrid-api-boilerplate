var fs = require('fs')
var path = require('path')
var Sequelize = require('sequelize')
var basename = path.basename(__filename)
const modelsDir = path.join(__dirname, 'models')
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '/../../config/db.js'))[env]
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

fs
  .readdirSync(modelsDir)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-9) === '.model.js')
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(modelsDir, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
