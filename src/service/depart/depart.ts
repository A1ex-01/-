import axRequest from "../axios"
export function getDepartList(data?: object) {
  return axRequest.post({
    url: "/department/list",
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
export function deleteDepartInfo(id: number | string) {
  return axRequest.delete({
    url: "/department/" + id
  })
}
export function CreateDepartInfo(data: any) {
  return axRequest.post({
    url: "/department/",
    data
  })
}
export function editDepartInfo(data: any) {
  return axRequest.patch({
    url: "/department/" + data.id,
    data
  })
}
