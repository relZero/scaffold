const Mock = require('mockjs')

const navData = {
  getNavData: () => {
    // 使用Mock.mock方法来生成mock数据
    return Mock.mock({
      code: 200,
      'data|5': [
        {
          id: '@id',
          'navName|+1': ['分类', '最热', '大玩家', '新游', '开服'],
          'navPath|+1': ['/', '/', '/', '/', '/'],
          'navPic|1': [
            'http://placehold.it/45x45/ccc/fff',
            'http://placehold.it/45x45/f55/fff',
            'http://placehold.it/45x45/55f/fff',
            'http://placehold.it/45x45/999/fff',
            'http://placehold.it/45x45/5f5/fff'
          ]
        }
      ]
    })
  }
}

module.exports = navData
