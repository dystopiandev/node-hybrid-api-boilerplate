const config = require('./config')
const server = require('./lib/server')
const isMasterProcess = require('./lib/isMasterProcess')
const port = process.argv[2] || config.server.port
const { exec } = require('child_process')

const upstart = async () => {
  // run migrations
  await new Promise((resolve, reject) => {
    const migrate = exec(
      `${__dirname}/node_modules/.bin/sequelize db:migrate`,
      {
        env: process.env,
        cwd: __dirname
      },
      (err, stdout, stderr) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      }
    )

    // Forward stdout+stderr to this process
    migrate.stdout.pipe(process.stdout)
    migrate.stderr.pipe(process.stderr)
  })

  // run seeders
  await new Promise((resolve, reject) => {
    const seed = exec(
      `${__dirname}/node_modules/.bin/sequelize db:seed:all`,
      {
        env: process.env,
        cwd: __dirname
      },
      (err, stdout, stderr) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      }
    )

    // Forward stdout+stderr to this process
    seed.stdout.pipe(process.stdout)
    seed.stderr.pipe(process.stderr)
  })

  // start server
  server.http.listen(port, () => console.log('', new Date(), `Server instance bound to port ${port}`))

  // run (if master process)
  if (isMasterProcess) {
    // ...
  }
}

upstart()
