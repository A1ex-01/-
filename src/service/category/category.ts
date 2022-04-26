import axRequest from "../axios"
export function getCategoryList(data?: object) {
  return axRequest.post({
    url: "/category/list",
    data: {
      offset: 0,
      size: 10,
      ...data
    }
  })
}
export function deleteCategoryInfo(id: number | string) {
  return axRequest.delete({
    url: "/category/" + id
  })
}
export function CreateCategoryInfo(data: any) {
  return axRequest.patch({
    url: "/category/",
    data
  })
}
export function editCategoryInfo(data: any) {
  return axRequest.patch({
    url: "/category/" + data.id,
    data
  })
}
