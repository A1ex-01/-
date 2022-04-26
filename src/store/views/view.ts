import { useDataMapEchart } from "@/hooks/useDataMapEchart"
import {
  getaddrSaleList,
  getCateCountList,
  getCateFavorList,
  getCateSaleList
} from "@/service/ecahrts/echarts"
import { Module } from "vuex"
import { IRootState } from "../types"
import { IDashBorderState } from "./type"

const dashBorderModule: Module<IDashBorderState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: {},
      categoryGoodsSale: {},
      categoryGoodsFavor: {},
      addressGoodsSale: {}
    }
  },
  getters: {
    categoryGoodsCounted(state) {
      if (state.categoryGoodsCount?.series) {
        const res = { ...state.categoryGoodsCount }
        res.series[0].roseType = "area"
        return res
      } else {
        return {}
      }
    }
  },
  mutations: {
    getCateCountList(state, payload) {
      state.categoryGoodsCount = payload
    },
    getCateSaleList(state, payload) {
      state.categoryGoodsSale = payload
    },
    getCateFavorList(state, payload) {
      state.categoryGoodsFavor = payload
    },
    getaddrSaleList(state, payload) {
      state.addressGoodsSale = payload
    }
  },
  actions: {
    async getCateCountList({ commit }) {
      const { data } = await getCateCountList()
      const result = useDataMapEchart("pie", "商品数量", data)
      commit("getCateCountList", result)
    },
    async getCateSaleList({ commit }) {
      const { data } = await getCateSaleList()
      const result = useDataMapEchart("line", "商品数量", data)
      commit("getCateSaleList", result)
    },
    async getCateFavorList({ commit }) {
      const { data } = await getCateFavorList()
      const result = useDataMapEchart("bar", "商品数量", data)
      commit("getCateFavorList", result)
    },
    async getaddrSaleList({ commit }) {
      const { data } = await getaddrSaleList()
      const result = useDataMapEchart("scatter", "商品数量", data)
      commit("getaddrSaleList", result)
    },
    async getAllViewShow({ dispatch }) {
      dispatch("getCateCountList")
      dispatch("getCateSaleList")
      dispatch("getCateFavorList")
      dispatch("getaddrSaleList")
    }
  }
}
export default dashBorderModule
