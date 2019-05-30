'use strict'

const config = require('../../config')
const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'user@domain.com',
        password: bcrypt.hashSync('password', config.server.saltRounds)
      },
      {
        firstName: 'Eva',
        lastName: 'Foster',
        email: 'user2@domain.com',
        password: bcrypt.hashSync('password', config.server.saltRounds)
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
