const pool = require('../lib/utils/pool');
const fs = require('fs');

const setupPool = () => {
  return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
};

module.exports = setupPool;