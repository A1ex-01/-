import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import LocalCache from "@/utils/cache"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/Login.vue")
  },
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/Main.vue"),
    redirect: (to) => {
      return "/main/analysis/overview"
    },
    children: []
  },
  {
    name: "notfound",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/not-found/NotFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 加载动态路由表

// 导航守卫
router.beforeEach((to) => {
  // 判断是否带有token
  if (to.path !== "/login") {
    if (!LocalCache.getCache("token")) {
      return "/login"
    }
  } else {
    if (LocalCache.getCache("token")) {
      return "/main"
    }
  }
})
export default router
