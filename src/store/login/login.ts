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
import { mapMenusToPermissions, mapmenusToRoutes } from "@/utils/mapMenus"
import { getDepartListRequest, getRoleListRequest } from "@/service/role/role"
import { getAllMenus } from "@/service/menu/menu"
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      usermenus: [],
      permissions: [],
      departList: [],
      roleList: [],
      allMenuList: []
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
      // 获取权限信息
      const permissions = mapMenusToPermissions(usermenus)
      state.permissions = permissions
    },
    changeDepartList(state, payload) {
      state.departList = payload
    },
    changeRoleList(state, payload) {
      state.roleList = payload
    },
    changeAllMenuList(state, payload) {
      state.allMenuList = payload
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
    },
    async getDepartList({ commit }) {
      const { data } = await getDepartListRequest()
      commit("changeDepartList", data.list)
    },
    async getRoleList({ commit }) {
      const { data } = await getRoleListRequest()
      commit("changeRoleList", data.list)
    },
    async getAllMenuTree({ commit }) {
      const { data } = await getAllMenus()
      commit("changeAllMenuList", data.list)
    }
  }
}
export default loginModule
