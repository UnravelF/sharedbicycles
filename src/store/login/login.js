import { login, getMenusByRoleId } from '@/service/login'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

const loginModule = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      loginStatus: false
    }
  },
  mutations: {
    changeLoginStatus(state, result) {
      state.loginStatus = result
    },
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus

      // 添加动态路由
      const routes = mapMenusToRoutes(userMenus)
      // routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async userLoginAction({ commit }, payload) {
      const loginResult = await login({ ...payload })
      if (loginResult.message || loginResult.state === 404) {
        commit('changeLoginStatus', true)
        return
      } else {
        const { token, role_id } = loginResult

        // 获取到token存取到vuex
        commit('changeToken', token)
        localCache.setCache('token', token)

        // 存取登录用户信息
        const userInfo = loginResult
        commit('changeUserInfo', loginResult)
        localCache.setCache('userInfo', userInfo)

        // 根据用户角色id获取用户菜单
        const menusResult = await getMenusByRoleId(role_id)
        const userMenus = menusResult.data[0].roleMenus
        commit('changeUserMenus', userMenus)
        localCache.setCache('userMenus', userMenus)

        // 登录成功 跳转首页
        router.push('/main')
      }
    },
    // 重新刷新后 自动获取本地缓存的数据
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        // dispatch('')
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
