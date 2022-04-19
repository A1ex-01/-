import axios from "axios"
import type { AxiosInstance } from "axios"
import type { AXRequestConfig, AXRequestInterceptors } from "./type"
import { ElLoading } from "element-plus"
class AXRequest {
  instance: AxiosInstance
  interceptors?: AXRequestInterceptors
  loading?: { close: () => void }
  constructor(config: AXRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 从config中取出拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestIntercetorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => err
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log("res success")
        this.loading?.close()
        return res.data
      },
      (err) => {
        console.log("res fail")
        this.loading?.close()
        return err
      }
    )
  }
  request<T>(config: AXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 是否显示loading
      if (config?.showLoading !== false) {
        this.loading = ElLoading.service({
          text: "loading~",
          lock: true,
          background: "rgba(0, 0, 0, .5)"
        })
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch(() => reject)
    })
  }
  get<T>(config: AXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }
  post<T>(config: AXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }
  delete<T>(config: AXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }
  patch<T>(config: AXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}
export default AXRequest
