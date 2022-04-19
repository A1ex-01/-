import type { AxiosResponse, AxiosRequestConfig } from "axios"
export interface AXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestIntercetorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface AXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: AXRequestInterceptors<T>
  showLoading?: boolean
}
