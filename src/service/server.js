import {post,get,patch,put} from './http'

export const personData = data =>post("/api/mytest/getPerson.action",data);
// export const list = (data1, data2, data3) => get('activity/list', {
//   data1:data1,
//   data2:data2,
//   data3:data3
// });
