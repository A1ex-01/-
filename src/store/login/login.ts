import { Module } from "vuex"
import { ILoginState } from "./types"
import { IRootState } from "../types"
import LocalCache from "@/utils/cache"
import {
  accountLoginRequest,
  getLoginUserInfoRequest,
  getUsermenuRequest
} from "@/service/login/login"
import { IAccount } from "@/service/login/types"
import router from "@/router"
import { mapmenusToRoutes } from "@/utils/mapMenus"
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      usermenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUsermenus(state, usermenus: object[]) {
      state.usermenus = usermenus
      // 加载动态路由表
      const routemenu = mapmenusToRoutes(usermenus)
      routemenu.forEach((route) => {
        router.addRoute("main", route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 请求用户token和id并缓存
      const res = await accountLoginRequest(payload)
      const { id, token } = res.data
      commit("changeToken", token)
      LocalCache.setCache("token", token)
      // 请求用户详细信息并缓存
      const result = await getLoginUserInfoRequest(id)
      commit("changeUserInfo", result.data)
      LocalCache.setCache("userInfo", result.data)
      // 请求用户菜单
      const menuList = await getUsermenuRequest(result.data.role.id)
      commit("changeUsermenus", menuList.data)
      LocalCache.setCache("usermenus", menuList.data)
      // 跳转至首页
      router.push("/main")
    },
    initLocalInfo({ commit }) {
      const token = LocalCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = LocalCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const usermenus = LocalCache.getCache("usermenus")
      if (usermenus) {
        commit("changeUsermenus", usermenus)
      }
    }
  }
}
export default loginModule
