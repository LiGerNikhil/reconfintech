// PM2 ecosystem file for reconfintech.com
// Usage: pm2 start ecosystem.config.cjs
module.exports = {
  apps: [{
    name: 'reconfintech',
    script: 'server.js',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '300M',
  }],
}
