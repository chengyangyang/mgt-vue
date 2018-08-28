var Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// 消息管理
let msgs = []
for (let i = 0; i < 30; i++) {
  msgs.push({
    title: Random.ctitle(3, 5),
    publishTime: Random.date()
  })
}
var totalPageNum = 0
// mock一组数据
const msgListData = function (opt) {
  let page = JSON.parse(opt.body).page
  let pageNumber = JSON.parse(opt.body).pageNumber
  let newMsgs = msgs.slice((page - 1) * pageNumber, page * pageNumber)
  // 查询条件
  if (JSON.parse(opt.body).title) {
    newMsgs = newMsgs.filter(item => item.title === JSON.parse(opt.body).title)
    totalPageNum = msgs.length
  }
  return {
    data: newMsgs,
    totalPage: totalPageNum
  }
}
Mock.mock('/msgList', /post|get/i, msgListData)

// 审核员管理
let users = []
for (let i = 0; i < 30; i++) {
  users.push({
    title: Random.ctitle(3, 5),
    realName: Random.cname()
  })
}
// mock一组数据
const userListData = function (opt) {
  let page = JSON.parse(opt.body).page
  let pageNumber = JSON.parse(opt.body).pageNumber
  let newUsers = users.slice((page - 1) * pageNumber, page * pageNumber)
  // 查询条件
  if (JSON.parse(opt.body).title) {
    newUsers = newUsers.filter(item => item.title === JSON.parse(opt.body).title)
    totalPageNum = users.length
  }
  return {
    data: newUsers,
    totalPage: totalPageNum
  }
}
Mock.mock('/userList', /post|get/i, userListData)

// 互动交流
let interactList = []
for (let i = 0; i < 30; i++) {
  interactList.push({
    title: Random.ctitle(3, 5),
    unitName: Random.cname(),
    msgTime: Random.date(),
    ansTime: Random.date(),
    ansState: Random.integer(1, 2)
  })
}
// mock一组数据
const interactListData = function (opt) {
  let page = JSON.parse(opt.body).page
  let pageNumber = JSON.parse(opt.body).pageNumber
  let newInteractList = interactList.slice((page - 1) * pageNumber, page * pageNumber)
  // 查询条件
  if (JSON.parse(opt.body).title) {
    newInteractList = interactList.filter(item => item.title === JSON.parse(opt.body).title)
    totalPageNum = interactList.length
  }
  return {
    data: newInteractList,
    totalPage: totalPageNum
  }
}
Mock.mock('/interactList', /post|get/i, interactListData)