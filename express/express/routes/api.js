var express = require('express');
var router = express.Router();
var db = require('./../modules/db.js')

/* GET home page. */
router.get('/:entity/:id', function (req, res, next) {
  let dbSmp = new db.databaseHandler(req.params.entity)
  let id = req.params.id || 0

  dbSmp.readAllPromise(id).then(
    data => res.json(data),
    err => res.json(err))

  /*dbSmp.readAlpsFile(id).then(
    data => res.json(data),
    err => res.json(err)
  )*/
});

router.get('/:entity', function (req, res, next) {
  let dbSmp = new db.databaseHandler(req.params.entity)

  dbSmp.readAlpsFile().then(
    data => res.send(data),
    err => res.json(err)
  )
});

module.exports = router;
