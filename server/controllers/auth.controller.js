const config = require('../../config')
const bcrypt = require('bcrypt')
const authService = require('../../services/auth.service')
const userService = require('../../services/user.service')

async function logout (req, res) {
  await req.session.destroy()

  return res.send({
    success: true,
    data: {}
  })
}

function login (req, res) {
  return authService.authenticate(req.body)
    .then(user => {
      req.session.user = user

      res.send({
        success: true,
        data: { user }
      })
    })
    .catch(err => {
      if (err.type === 'simplified') {
        return res.send({
          success: false,
          message: err.message
        })
      }
      return res.send({
        success: false,
        message: 'Authentication failed. Unexpected Error.'
      })
    })
}

function register (req, res) {
  return userService.getUserByEmail(req.body.email || '')
    .then(async exists => {
      if (exists) {
        return res.send({
          success: false,
          message: 'Registration failed. An account is already bound to the supplied email address.'
        })
      }

      const encryptedPassword = await new Promise(resolve => {
        bcrypt.hash(req.body.password, config.server.saltRounds, (err, encrypted) => {
          if (err) resolve(false)

          resolve(encrypted)
        })
      })

      if (!encryptedPassword) {
        return res.send({
          success: false,
          message: 'Registration failed. Unexpected Error.'
        })
      }

      const user = {
        email: req.body.email,
        password: encryptedPassword
      }

      return userService.addUser(user)
        .then(() => res.send({ success: true }))
    })
}

module.exports = {
  logout,
  login,
  register
}
