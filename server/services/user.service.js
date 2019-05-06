const User = require('../../db/models').User

const addUser = userData => User.create(userData)
const getUserByEmail = email => User.findOne({ where: { email } })

module.exports = {
  addUser,
  getUserByEmail
}
