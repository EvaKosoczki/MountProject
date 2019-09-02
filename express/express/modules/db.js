const path = require('path');
const fs = require('fs');

class databaseHandler {
  constructor(entity) {
    this.jsonFolderPath = path.join(__dirname, '../../..', 'json');
    this.jsonPath = path.join(this.jsonFolderPath, `${entity}.json`)
    this.jsonPathFa = path.join(this.jsonFolderPath, 'firstAscent.json')
  }
  readjsonfile(id = 0) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonPath, 'utf8', (err, data) => {
        if (err) {
          return reject(JSON.stringify(err))
        }
        if (id == 0) {
          resolve(JSON.parse(data))
        } else {
          this.oneMountain = JSON.parse(data).filter((item) =>
            item.id == id
          )[0] || {}
          resolve(this.oneMountain)
        }
      })
    })
  };
  readFirstAscent() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonPathFa, 'utf8', (err, data) => {
        if (err) {
          return reject(JSON.stringify(err))
        }

      })
    })
  }
}
module.exports = {
  databaseHandler: databaseHandler
}
