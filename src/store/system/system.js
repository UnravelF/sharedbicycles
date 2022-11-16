import { getPageListData, queryPageListData } from '@/service/system'

const systemModule = {
  namespaced: true,
  state() {
    return {
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeRoleList(state, roleList) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount) {
      state.roleCount = roleCount
    }
  },
  actions: {
    // 获取不同页面的的数据
    async getPageListAction({ commit }, payload) {
      console.log(payload)
      // 获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/querylist`

      console.log(payload.queryInfo)
      // 发送获取页面数据请求
      const pageResult = await queryPageListData(pageUrl, payload.queryInfo)
      console.log(pageResult)
    }
  }
}

export default systemModule
