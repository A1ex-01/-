import axRequest from "../axios"
import { IDataType, IRoleResult } from "./tyeps"
export function getRoleList(data?: any) {
  return axRequest.post<IDataType<IRoleResult>>({
    url: "/role/list",
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
export function deleteRoleInfo(id: number | string) {
  return axRequest.delete({
    url: "/role/" + id
  })
}
export function getDepartListRequest() {
  return axRequest.post<IDataType<IRoleResult>>({
    url: "/department/list",
    data: {
      offset: 0,
      size: 100
    }
  })
}
export function getRoleListRequest() {
  return axRequest.post<IDataType<IRoleResult>>({
    url: "/role/list",
    data: {
      offset: 0,
      size: 100
    }
  })
}
export function createRoleInfo(data: any) {
  return axRequest.post({
    url: "/role",
    data: data
  })
}
export function editRoleInfo(data: any) {
  return axRequest.patch({
    url: "/role/" + data.id,
    data
  })
}
