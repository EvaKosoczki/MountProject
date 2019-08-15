const path = require('path');
const fs = require('fs');

module.exports = class databaseHandler {
  constructor() {
    this.jsonPath = path.join(__dirname, '../..', 'json', 'alps.json');
    console.log(this.jsonPath);
  }
  readjsonfile() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonPath, 'utf8', (err, data) => {
        if (err) {
          return reject(err)
        }
        resolve(data)
      })
    })
  }
}
