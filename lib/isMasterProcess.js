const cluster = require('cluster')

function isMasterProcess () {
  if (process.env.hasOwnProperty('NODE APP INSTANCE')) {
    return process.env['NODE APP INSTANCE'] === '0'
  } else if (process.env.hasOwnProperty('NODE_APP_INSTANCE')) {
    return process.env['NODE_APP_INSTANCE'] === '0'
  } else {
    return cluster.isMaster
  }
}
module.exports = isMasterProcess()
