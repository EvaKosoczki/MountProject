const path = require('path');
const fs = require('fs');
const mariadb = require('mariadb');
const pool = mariadb.createPool({
  database: 'mountains',
  user: 'root',
  password: 'root',
  connectionLimit: 5
})


module.exports = class MountDB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn)
  }

  async getMountains() {
    let sql = `
     SELECT Mountain,Height,Country 
     FROM mountains
     `
    let result = await this.conn.query(sql);
    return result;
  }
}
