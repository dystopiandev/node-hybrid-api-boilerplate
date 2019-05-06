'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'user@domain.tld',
        password: '?'
      },
      {
        firstName: 'Eva',
        lastName: 'Foster',
        email: 'user2@domain.tld',
        password: '?'
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
