var express = require('express');
var router = express.Router();
let MountDB = require('../db/mountDb')
let MountDBSmp = new MountDB();

/* GET home page. */
router.get('/', async (req, res, next) => {
  let data = await MountDBSmp.getMountains()
  res.render('mountains', {
    datas: data
  });
});

module.exports = router;
