const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'forexapp',
  password: 'usman2000',
  port: 5432,
})

module.exports = pool;