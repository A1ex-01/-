import axRequest from "../axios"
import { IMenuResult, IDataType } from "./types"
export function getMenuList(data?: object) {
  return axRequest.post<IDataType<IMenuResult>>({
    url: "/menu/list",
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
export function deleteMenuInfo(id: number | string) {
  return axRequest.delete({
    url: "/menu/" + id
  })
}
export function createMenuInfo(data: any) {
  return axRequest.post({
    url: "/menu",
    data: data
  })
}
export function ediMenuInfo(data: any) {
  return axRequest.patch({
    url: "/menu/" + data.id,
    data
  })
}
export function getAllMenus() {
  return axRequest.post<IDataType>({
    url: "/menu/list"
  })
}
