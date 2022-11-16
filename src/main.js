import Vue from 'vue'
import App from './App.vue'

// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from './router'
import store from './store'
import { setupStore } from '@/store'
// 引入css初始化文件
import 'normalize.css'
import './assets/css/index.less'

// 页面强制刷新 重新从本地存储获取登录后的数据
setupStore()
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
