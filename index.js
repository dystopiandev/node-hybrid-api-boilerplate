const config = require('./config')
const server = require('./lib/server')
const port = process.argv[2] || config.server.defaultPort

server.http.listen(port, () => console.log(`Server instance bound to port ${port}!`))

server.socket.on('connection', function (client) {
  console.log('Client connected...')
})
