import { request } from './request'

// 请求页面数据
export function getPageListData(url) {
  return request({
    url: url,
    method: 'get'
  })
}

// 根据条件查询页面数据
export function queryPageListData(url, queryInfo) {
  return request({
    url: url,
    method: 'post',
    data: {
      ...queryInfo
    }
  })
}
