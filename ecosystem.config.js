module.exports = {
  apps: [
    {
      name: 'API',
      script: 'server/index.js',
      args: '',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_prod: {
        NODE_ENV: 'production'
      }
    }
  ]
}
