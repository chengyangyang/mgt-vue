export default {
  //类似于存储全局变量的数据
  state: {
    show: false,
    testList:['消消',"乐乐","憨憨"],
    count:0
  },
  //提供存储设置state数据的方法
  mutations: {
    switch_dialog (state) { // 这里的state对应着上面这个state
      state.show = !state.show
      // 你还可以在这里执行其他的操作改变state
    },
    // 加1
    INCREMENT(state) {
      state.count++;
    },
    // 减1
    DECREMENT(state) {
      state.count--
    }
  },
  //提供和后台接口打交道的方法，并调用mutations提供的方法
  actions: {
    switch_dialog (context) { // 这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_dialog')
      // 你还可以在这里触发其他的mutations方法
    },
    increment(context) {
      context.commit("INCREMENT");
    },
    decrement(context) {
      context.commit("DECREMENT");
    }
  },
  //提供用来获取state数据的方法
  getters: {
    not_show (state) { // 这里的state对应着上面这个state
      return !state.show
    },
    getTest(state){
      return state.count;
    }
  }
}
