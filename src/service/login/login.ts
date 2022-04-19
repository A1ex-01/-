import { IDataType, ILoginResult } from "@/service/login/types"
import axRequest from "../axios"
import { IAccount } from "./types"
export function accountLoginRequest(account: IAccount) {
  return axRequest.post<IDataType<ILoginResult>>({
    url: "/login",
    data: account,
    showLoading: false
  })
}
export function getLoginUserInfoRequest(id: number) {
  return axRequest.get<IDataType>({
    url: `/users/${id}`,
    showLoading: false
  })
}
export function getUsermenuRequest(id: number) {
  return axRequest.get<IDataType>({
    url: `/role/${id}/menu`
  })
}
