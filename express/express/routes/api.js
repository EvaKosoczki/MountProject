var express = require('express');
var router = express.Router();
var db = require('./../modules/db.js')

/* GET home page. */
router.get('/:entity/:id', function (req, res, next) {
  let dbSmp = new db.databaseHandler(req.params.entity)
  let id = req.params.id || 0
  dbSmp.readjsonfile(id).then(
    data => res.json(data),
    err => res.json(err)
  )
});

router.get('/:entity', async (req, res, next) => {
  let dbSmp = new db.databaseHandler(req.params.entity)
  data = [];
  try {
    data = await dbSmp.readjsonfile()
  }
  catch (err) {
    return res.send(err);
  }
  res.send()
})
module.exports = router;
