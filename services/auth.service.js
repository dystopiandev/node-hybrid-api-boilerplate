const Users = require('../db/models').User
const SimplifiedError = require('../lib/simplifiedError')
const bcrypt = require('bcrypt')

const authenticate = params => {
  return Users.findOne({
    where: {
      email: params.email
    },
    raw: true
  }).then(async user => {
    if (!user) {
      throw new SimplifiedError('Authentication failed. Invalid credentials.')
    }

    const correctPassword = await new Promise(resolve => {
      bcrypt.compare(params.password || '', user.password, (err, same) => {
        if (err) resolve(null)

        resolve(same)
      })
    })

    if (correctPassword === null) {
      throw new SimplifiedError('Authentication failed. Unexpected error.')
    } else if (!correctPassword) {
      throw new SimplifiedError('Authentication failed. Invalid credentials.')
    }

    return {
      email: user.email,
      id: user.id
    }
  })
}

module.exports = {
  authenticate
}
