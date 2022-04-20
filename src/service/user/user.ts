import axRequest from "../axios"
import { IUserResult, IDataType } from "./types"
export function getUserList(data?: object) {
  return axRequest.post<IDataType<IUserResult>>({
    url: "/users/list",
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
