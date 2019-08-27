const path = require('path');
const fs = require('fs');

module.exports = class databaseHandler {
  constructor(url) {
    this.slicedString = url.split('/');
    this.id = this.slicedString[2] || 0;
    this.jsonPath = path.join(__dirname, '../..', 'json', 'alps.json');

  }
  readjsonfile() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonPath, 'utf8', (err, data) => {
        if (err) {
          return reject(JSON.stringify(err))
        }
        if (this.id == 0) {
          resolve(JSON.parse(data))
        } else {
          this.oneMountain = JSON.parse(data).filter((item) =>
            item.id == this.id
          )[0] || {}
          resolve(this.oneMountain)
        }
      })
    })
  }
}
