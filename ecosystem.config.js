module.exports = {
  apps: [{
    name: 'node-hybrid-api-boilerplate',
    script: 'index.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    instances: 0,
    autorestart: true,
    watch: false
  }]
}
