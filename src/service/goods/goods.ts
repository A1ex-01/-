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
