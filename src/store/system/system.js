import {
  getPageListData,
  getPageListCount,
  queryPageListData,
  getQueryPageListDataCount
} from '@/service/system'

const systemModule = {
  namespaced: true,
  state() {
    return {
      roleList: [],
      roleCount: 0,
      usersList: [],
      usersCount: 0,
      investList: [],
      investCount: 0,
      repairList: [],
      repairCount: 0
    }
  },
  mutations: {
    changeRoleList(state, roleList) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount) {
      state.roleCount = roleCount
    },
    changeUsersList(state, usersList) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount) {
      state.usersCount = usersCount
    },
    changeInvestList(state, investList) {
      state.investList = investList
    },
    changeInvestCount(state, investCount) {
      state.investCount = investCount
    },
    changeRepairList(state, repairList) {
      state.repairList = repairList
    },
    changeRepairCount(state, repairCount) {
      state.repairCount = repairCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName) => {
        return state[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName) => {
        return state[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 获取不同页面的的数据
    async getPageListAction({ commit }, payload) {
      // 有查询条件时，根据条件查询列表数据
      if (payload.queryInfo) {
        // 获取pageUrl
        const pageName = payload.pageName
        const pageUrl = `/${pageName}/querylist`
        // 发送获取页面数据请求
        const pageResult = await queryPageListData(
          pageUrl,
          payload.queryInfo,
          payload.pageInfo
        )
        console.log(pageResult.data)
        // 返回数据
        const pageList = pageResult.data
        // 数据总数
        const countResult = await getQueryPageListDataCount(
          pageUrl + 'Count',
          payload.queryInfo
        )
        const pageCount = countResult.data[0].count

        const changePageName =
          pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
        commit(`change${changePageName}List`, pageList)
        commit(`change${changePageName}Count`, pageCount)
      } else {
        const pageName = payload.pageName
        const pageUrl = `/${pageName}/list`
        // 返回数据
        const pageResult = await getPageListData(pageUrl, payload.pageInfo)
        const pageList = pageResult.data
        // 返回总数
        const countResult = await getPageListCount(pageUrl + 'Count')
        const pageCount = countResult.data[0].count

        const changePageName =
          pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
        commit(`change${changePageName}List`, pageList)
        commit(`change${changePageName}Count`, pageCount)
      }
    }
  }
}

export default systemModule
