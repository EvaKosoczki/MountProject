const path = require('path');
const fs = require('fs');

class databaseHandler {
  constructor(entity) {
    //this.slicedString = url.split('/');
    //this.id = this.slicedString[2] || 0;
    this.jsonFolderPath = path.join(__dirname, '../../..', 'json');
    this.jsonPath = path.join(this.jsonFolderPath, `${entity}.json`)
    this.firstAscentPath = path.join(this.jsonFolderPath, `firstascent.json`)
  }
  readAlpsFile(id = 0) {
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

  readfirstAscentFile(id = 0) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.firstAscentPath, 'utf8', (err, data) => {
        if (err) {
          return reject(JSON.stringify(err))
        } else {
          this.firstAscentData = JSON.parse(data).filter((item) =>
            item.Id == id
          )[0] || {}
          resolve(this.firstAscentData)
        }
      })
    })
  };

  readAllPromise(id) {
    return Promise.all([this.readfirstAscentFile(id = 0), this.readAlpsFile(id = 0)])
  }

}



module.exports = {
  databaseHandler: databaseHandler
}
