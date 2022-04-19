import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// 重置样式
import "normalize.css"
import "@/assets/css/index.scss"
// 初始化vuex数据
import { setupStore } from "@/store/index"
setupStore()
createApp(App).use(store).use(router).mount("#app")
