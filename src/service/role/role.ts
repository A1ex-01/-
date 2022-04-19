import axRequest from "../axios"
import { IDataType, IRoleResult } from "./tyeps"
export function getRoleList(data?: any) {
  console.log("eee", data)
  return axRequest.post<IDataType<IRoleResult>>({
    url: "/role/list",
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
