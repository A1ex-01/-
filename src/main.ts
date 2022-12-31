import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import i18n from "./locale"
// 重置样式
import "normalize.css"
import "@/assets/css/index.scss"
// 初始化vuex数据
import { setupStore } from "@/store/index"
setupStore()

// 进度条
import NProgress from "nprogress"
import "nprogress/nprogress.css"
NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
})
//路由监听
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
//路由跳转结束
router.afterEach(() => {
  NProgress.done()
})
// 与演化
const app = createApp(App)
app.use(store).use(i18n).use(router).mount("#app")
