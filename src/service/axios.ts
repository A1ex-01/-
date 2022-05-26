import AXRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
import LocalCache from "@/utils/cache"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
})
const axRequest = new AXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      NProgress.start()
      const token = LocalCache.getCache("token")
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`
        }
      }
      return config
    },
    requestIntercetorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      NProgress.done()
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default axRequest
