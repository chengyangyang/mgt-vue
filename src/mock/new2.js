// 咨询列表详情
// 使用 Mock
var Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// 咨询管理
let articles = []
for (let i = 0; i < 30; i++) {
  let newArticleObject = {
    title: Random.ctitle(3, 5),
    publishUnit: Random.cword(5),
    type: Random.integer(1, 4), // Random.integer随机生成0和1
    isPublish: Random.boolean(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    publishTime: Random.date()
  }
  articles.push(newArticleObject)
}
var totalPageNum = 0
// mock一组数据
const newsListData = function (opt) {
  var page = JSON.parse(opt.body).page
  var pageNumber = JSON.parse(opt.body).pageNumber
  var newArticles = articles.slice((page - 1) * pageNumber, page * pageNumber)
  // 查询条件
  if (JSON.parse(opt.body).title) {
    newArticles = newArticles.filter(item => item.title === JSON.parse(opt.body).title)
    totalPageNum = newArticles.length
  }
  return {
    data: newArticles,
    totalPage: totalPageNum
  }
}
Mock.mock('/newsList', /post|get/i, newsListData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据

let personConfig = []
for (let i = 0; i < 15; i++) {
  let configObject = {
    userName: Random.cname(),
    isPublished: Random.integer(0, 1),
    publishUnit: Random.ctitle(3, 5),
    companyCode: Random.natural(10000),
    companyName: Random.ctitle(7),
    type: Random.integer(1, 2), // Random.integer随机生成0和1
    phoneNumber: Random.natural(22),
    publishTime: Random.date()
  }
  personConfig.push(configObject)
}
Mock.mock('/configData', /post|get/i, function (opt) {
  var page = JSON.parse(opt.body).page
  var pageNumber = JSON.parse(opt.body).pageNumber
  var configArticles = personConfig.slice((page - 1) * pageNumber, page * pageNumber)
  totalPageNum = personConfig.length
  // 查询条件
  // if (JSON.parse(opt.body).title) {
  //   newArticles = newArticles.filter(item => item.title === JSON.parse(opt.body).title)
  //   totalPageNum = configArticles.length
  // }
  return {
    data: configArticles,
    totalPage: totalPageNum
  }
})
