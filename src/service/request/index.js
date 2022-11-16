import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'

import localCache from '@/utils/cache'

export function request(options) {
  return new Promise((resolve, reject) => {
    // 创建实例
    const instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT
    })

    // 请求拦截器
    instance.interceptors.request.use((config) => {
      // 拦截token
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    // 响应拦截器
    instance.interceptors.response.use((res) => {
      return res.data
    })

    // 通过实例发送请求
    instance(options)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
