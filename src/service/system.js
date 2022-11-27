import { request } from './request'

// 请求页面数据
export function getPageListData(url, pageInfo) {
  return request({
    url: url,
    method: 'get',
    params: {
      offset: pageInfo.currentPage - 1,
      size: pageInfo.pageSize
    }
  })
}

// 获取数据总数
export function getPageListCount(url) {
  return request({
    url: url,
    method: 'get'
  })
}

// 根据条件查询页面数据
export function queryPageListData(url, queryInfo, pageInfo) {
  return request({
    url: url,
    method: 'post',
    data: {
      ...queryInfo
    },
    params: {
      ...pageInfo
    }
  })
}
// 获取根据条件查询页面数据总数
export function getQueryPageListDataCount(url, queryInfo) {
  return request({
    url: url,
    method: 'post',
    data: {
      ...queryInfo
    }
  })
}

// 新建列表数据
export function createPageData(url, newData) {
  return request({
    url: url,
    method: 'post',
    data: newData
  })
}

// 编辑列表数据
export function editPageData(url, editData) {
  return request({
    url: url,
    method: 'patch',
    data: editData
  })
}
