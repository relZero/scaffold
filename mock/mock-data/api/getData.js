const Mock = require('mockjs')

const getUserInfo = {
  generateData: () => {
    // 使用Mock.mock方法来生成mock数据
    return Mock.mock({
      code: 200,
      'data|12': [
        {
          id: '@id',
          title: '@ctitle(15, 25)',
          author: '@cname',
          volume: '@int(100, 300)',
          createAt: '@int(10000000000000, 1554363040517)'
        }
      ]
    })
  },
  generateDataById: id => {
    return Mock.mock({
      code: 200,
      data: {
        id,
        title: '@ctitle(15, 25)',
        author: '陆轶艺',
        volume: '@int(100, 300)',
        createAt: '@int(10000000000000, 1554363040517)'
      }
    })
  },
  generateSchedule: () => {
    return Mock.mock({
      code: 200,
      data: {
        subcontractingFlag: false
      }
    })
  }
}

module.exports = getUserInfo
