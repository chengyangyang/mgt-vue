import './new1.js'
import './new2.js'
import './new3.js'
// 使用 Mock
var Mock = require('mockjs')
// 测试数据
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceData = function (opt) {
  let articles = []
  for (let i = 0; i < 30; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), // Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}
Mock.mock('/news', /post|get/i, produceData) // 当post或get请求到/news路由时Mock会拦截请求并返回上面的数据
