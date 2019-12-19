const Mock = require('mockjs')

const searchType = {
  getSearchType: query => {
    // 使用Mock.mock方法来生成mock数据
    return Mock.mock({
      code: 200,
      typeClass: query.typeClass,
      'data|10-20': [
        {
          id: '@id',
          typeName: '@ctitle(2)'
        }
      ]
    })
  }
}

module.exports = searchType
