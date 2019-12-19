const Mock = require('mockjs')

const searchHistory = {
  getSearchLike: () => {
    // 使用Mock.mock方法来生成mock数据
    return Mock.mock({
      code: 200,
      'data|10-20': [
        {
          id: '@id',
          likeWord: '@ctitle(4, 6)',
          'isImportant|1': true,
        }
      ]
    })
  }
}

module.exports = searchHistory
