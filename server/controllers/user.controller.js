const userService = require('../services/user.service')

function self (req, res) {
  userService.getUserByEmail(req.session.user.email)
    .then(user => {
      res.send({
        success: true,
        data: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }
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
        message: 'Operation failed. Unexpected Error.'
      })
    })
}

module.exports = {
  self
}
