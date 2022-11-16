import { request } from './request'

// 登录请求
export function login(userInfo) {
  return request({
    url: '/login',
    method: 'post',
    data: { ...userInfo }
  })
}
// 根据角色id获取角色菜单
export function getMenusByRoleId(id) {
  return request({
    url: '/roleMenus/' + id,
    method: 'get'
  })
}
