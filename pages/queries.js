const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'forexapp',
  password: 'usman2000',
  port: 5432,
})

module.exports = pool;