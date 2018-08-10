// 咨询列表详情
// 使用 Mock
var Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random

let articles = []
for (let i = 0; i < 30; i++) {
  let newArticleObject = {
    title: Random.ctitle(3, 5),
    publishUnit: Random.cword(5),
    type: Random.integer(1, 4), // Random.integer随机生成0和1
    isPublish: Random.integer(0, 1), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    publishTime: Random.date()
  }
  articles.push(newArticleObject)
}
// mock一组数据
const newsListData = function (opt) {
  var page = JSON.parse(opt.body).page
  var pageNumber = JSON.parse(opt.body).pageNumber
  var newArticles = articles.slice((page - 1) * pageNumber, page * pageNumber)
  return {
    data: newArticles,
    totalPage: articles.length
  }
}
Mock.mock('/newsList', /post|get/i, newsListData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据
