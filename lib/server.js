const config = require('../config')
const SimplifiedError = require('./simplifiedError')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const redisAdapter = require('socket.io-redis')
const session = require('./session')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const router = require('../server/routes/router')
const redis = require('redis').createClient
const redisInstances = [
  redis(
    config.redis.port,
    config.redis.host,
    { auth_pass: config.redis.pass }
  ),
  redis(
    config.redis.port,
    config.redis.host,
    { auth_pass: config.redis.pass }
  )
]

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session)

// capture error resulting from brief redis disconnection
app.use(function (req, res, next) {
  if (!req.session) {
    return next(new SimplifiedError('System error.')) // handle error
  }

  next() // otherwise continue
})
app.use(router)

// apply shared session
io.use((socket, next) => {
  session(socket.request, socket.request.res || {}, next)
})

// verify session
io.use((socket, next) => {
  if (socket.request.session.user) {
    next()
  } else next(new Error('Not authorized.'))
})
io.adapter(redisAdapter({ pubClient: redisInstances[0], subClient: redisInstances[1] }))

module.exports = {
  http: server,
  express: app,
  socket: io
}
