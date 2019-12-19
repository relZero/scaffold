const Mock = require('mockjs')
let Random = Mock.Random

const swiperPic = {
  getSwiperPic: () => {
    // 使用Mock.mock方法来生成mock数据
    return Mock.mock({
      code: 200,
      'data|6': [
        {
          id: '@id',
          picUrl: Random.image('640x273', '#f55', '#fff', 'Mock.js')
        }
      ]
    })
  }
}

module.exports = swiperPic
