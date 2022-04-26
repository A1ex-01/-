import axRequest from "../axios"
import { IDataType } from "../login/types"
import { IAddress, ICategory } from "./types"
export function getCateCountList() {
  return axRequest.get<IDataType<ICategory>>({
    url: "/goods/category/count"
  })
}
export function getCateSaleList() {
  return axRequest.get<IDataType<ICategory>>({
    url: "/goods/category/sale"
  })
}
export function getCateFavorList() {
  return axRequest.get<IDataType<ICategory>>({
    url: "/goods/category/favor"
  })
}
export function getaddrSaleList() {
  return axRequest.get<IDataType<IAddress>>({
    url: "/goods/address/sale"
  })
}
