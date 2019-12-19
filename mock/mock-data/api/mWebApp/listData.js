const Mock = require('mockjs')
let Random = Mock.Random

const listData = {
  getListData: query => {
    let mockData
    // 使用Mock.mock方法来生成mock数据
    if (query.listName === 'hotGame') {
      mockData = {
        code: 200,
        listName: query.listName,
        resMessage: '获取成功',
        'data|8': [
          {
            itemId: '@id',
            itemPicUrl: Random.image('130x130', '#f55', '#fff', 'Mock.js'),
            itemTitle: '@ctitle(3, 5)',
            itemWord: '@ctitle(10, 20)',
            itemSize: '@int(100, 999)MB',
            itemType: '@ctitle(2)',
            'itemPath|+1': '/@id',
            'isPlayer|1': true,
            'isGift|1': true,
            'isHot|1': true
          }
        ]
      }
    } else if (query.listName === 'newGame' || query.listName === 'youLike') {
      mockData = {
        code: 200,
        listName: query.listName,
        resMessage: '获取成功',
        'data|5': [
          {
            itemId: '@id',
            itemPicUrl: Random.image('130x130', '#f55', '#fff', 'Mock.js'),
            itemTitle: '@ctitle(3, 5)',
            itemWord: '@ctitle(15, 30)',
            itemSize: '@int(100, 999)MB',
            itemType: '@ctitle(2)',
            'itemPath|+1': '/@id',
            'isPlayer|1': true,
            'isGift|1': true,
            'isHot|1': true
          }
        ]
      }
    } else {
      mockData = {
        code: 200,
        resMessage: '没有该列表数据'
      }
    }
    return Mock.mock(mockData)
  }
}

module.exports = listData
