import axRequest from "../axios"
export function getGoodList(data?: object) {
  return axRequest.post({
    url: "/goods/list",
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
export function deleteGoodsInfo(id: number | string) {
  return axRequest.delete({
    url: "/goods/" + id
  })
}
export function CreateGoodsInfo(data: any) {
  return axRequest.patch({
    url: "/goods/",
    data
  })
}
export function editGoodsInfo(data: any) {
  return axRequest.patch({
    url: "/goods/" + data.id,
    data
  })
}
