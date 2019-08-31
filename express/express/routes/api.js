var express = require('express');
var router = express.Router();
var db = require('./../modules/db.js')

/* GET home page. */
router.get('/:entity', function (req, res, next) {
  let dbSmp = new db.databaseHandler(req.params.entity)

  dbSmp.readjsonfile().then(
    data => res.json(data),
    err => res.json(err)
  )
});

module.exports = router;
