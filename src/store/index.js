import Vue from 'vue'
import Vuex from 'vuex'

// 引入login模块
import login from './login/login'
import system from './system/system'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: () => {
    return {}
  },
  modules: {
    login,
    system
  }
})
// 解决刷新后 vuex重新获取本地存储数据
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
