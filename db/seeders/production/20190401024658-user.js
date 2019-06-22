'use strict'

const config = require('../../../config')
const bcrypt = require('bcrypt')
const { User } = require('../../models')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return User.bulkCreate([
      {
        id: 1,
        email: 'user@domain.com',
        password: bcrypt.hashSync('password', config.server.saltRounds),
        status: 1
      },
      {
        id: 2,
        email: 'user2@domain.com',
        password: bcrypt.hashSync('password', config.server.saltRounds),
        status: 1
      }
    ], {
      ignoreDuplicates: true
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {})
  }
}
