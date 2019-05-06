const checkAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.status(403).send({
      auth: false,
      message: 'Not authorized.'
    })
  }

  next()
}

module.exports = {
  checkAuth
}
