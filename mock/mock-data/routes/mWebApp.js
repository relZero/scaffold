const express = require('express')
const router = express.Router()
const SwiperPicData = require('../api/mWebApp/swiperPicData')
const navData = require('../api/mWebApp/navData')
const listData = require('../api/mWebApp/listData')
const searchType = require('../api/mWebApp/searchTypeData.js')
const searchHistory = require('../api/mWebApp/searchHistoryData.js')

router.get('/swiperPic', function(req, res, next) {
  res.json(SwiperPicData.getSwiperPic())
})

router.get('/navData', function(req, res, next) {
  res.json(navData.getNavData())
})

router.get('/listData', function(req, res, next) {
  res.json(listData.getListData(req.query))
})

router.get('/searchType', function(req, res, next) {
  res.json(searchType.getSearchType(req.query))
})

router.get('/searchLike', function(req, res, next) {
  res.json(searchHistory.getSearchLike())
})

module.exports = router
