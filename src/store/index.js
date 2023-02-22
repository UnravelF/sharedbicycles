import Vue from 'vue'
import Vuex from 'vuex'

// 引入login模块
import login from './login/login'
import system from './system/system'

// 网络请求文件
import { getPageListData } from '@/service/system'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: () => {
    return {
      cityList: [],
      suppliersList: [],
      roleList: []
    }
  },
  mutations: {
    changeCityList(state, cityList) {
      state.cityList = cityList
    },
    changeSuppliersList(state, suppliersList) {
      state.suppliersList = suppliersList
    },
    changeRoleList(state, roleList) {
      state.roleList = roleList
    }
  },
  actions: {
    async getInitialDataAction({ commit, dispatch }) {
      if (store.state.login.token) {
        // 1. 请求城市点位、供应商数据
        const cityResult = await getPageListData('/city/list', {
          currentPage: 1,
          pageSize: 100
        })
        // 城市点位
        const cityList = cityResult.data
        const suppliersResult = await getPageListData('/suppliers/list', {
          currentPage: 1,
          pageSize: 100
        })
        const suppliersList = suppliersResult.data
        // 角色点位
        const roleResult = await getPageListData('/role/list', {
          currentPage: 1,
          pageSize: 100
        })
        const roleList = roleResult.data
        // 2. 保存数据
        commit('changeCityList', cityList)
        commit('changeSuppliersList', suppliersList)
        commit('changeRoleList', roleList)

        // 解决数据统计页面无法获取数据
        const pageNames = ['order', 'finish', 'invest', 'repair']
        pageNames.map(async (item) => {
          await dispatch(`system/getPageListAction`, {
            pageName: item,
            pageInfo: { currentPage: 1, pageSize: 10 }
          })
        })
      } else {
        return
      }
    }
  },
  modules: {
    login,
    system
  }
})
// 解决刷新后 vuex重新获取本地存储数据
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

export default store
