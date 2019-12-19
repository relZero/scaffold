const express = require('express')
const router = express.Router()
const GetUserInfo = require('../api/getData')

router.get('/', function(req, res, next) {
  if (Object.keys(req.query).length === 0) {
    res.json(GetUserInfo.generateData())
  } else {
    let dataId = req.query.id
    res.json(GetUserInfo.generateDataById(dataId))
  }
})

router.get('/schedule', function(req, res, next) {
  res.json(GetUserInfo.generateSchedule())
})

module.exports = router
