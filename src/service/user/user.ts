import axRequest from "../axios"
import { IUserResult, IDataType } from "./types"
export function getUsersList(data?: object) {
  return axRequest.post<IDataType<IUserResult>>({
    url: "/users/list",
    transformResponse: [
      function (res) {
        const resp = JSON.parse(res)
        resp.data.list = resp.data.list.filter(
          (item: any) => item.name.indexOf("coder") === -1
        )
        resp.data.totalCount = resp.data.list.length
        return resp
      }
    ],
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
export function deleteUsersInfo(id: number | string) {
  return axRequest.delete({
    url: "/users/" + id
  })
}
export function createUsersInfo(data: any) {
  return axRequest.post({
    url: "/users",
    data: data
  })
}
export function editUsersInfo(data: any) {
  return axRequest.patch({
    url: "/users/" + data.id,
    data
  })
}
