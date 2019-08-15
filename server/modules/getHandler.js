const db = require('./db')


module.exports = class getHandler {
  constructor(req, res) {
    const dbSample = new db();
    dbSample.readjsonfile().then(
      data => res.end(data),
      err => res.end(err)
    )

  };

}
