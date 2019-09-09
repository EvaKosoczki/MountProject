const path = require('path');
const fs = require('fs');

class databaseHandler {
  constructor(entity) {
    //this.slicedString = url.split('/');
    //this.id = this.slicedString[2] || 0;
    this.jsonFolderPath = path.join(__dirname, '../../..', 'json');
    this.jsonPath = path.join(this.jsonFolderPath, `${entity}.json`)
    console.log(this.jsonPath)
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
  }
}
module.exports = {
  databaseHandler: databaseHandler
}
