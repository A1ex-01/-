// import { getUserList } from "@/service/user/user"
// import { getRoleList } from "@/service/role/role"
import { allMatch } from "@/service/allMatchFn"
import { ref } from "vue"
export async function useFormDataShow(pageName: string) {
  const formData = ref<any>()
  const updateForm = ref<any>()
  const { data } = await allMatch[pageName].getDataList()
  formData.value = data
  updateForm.value = async (info: object) => {
    const { data } = await allMatch[pageName].getDataList(info)
    formData.value = data
  }
  // if (pageName === "user") {
  //   // let updateForm: any
  //   // 根据来自的哪个页面请求不同配置
  //   const { data } = await getUserList()
  //   formData.value = data
  //   updateForm.value = async (info: object) => {
  //     const { data } = await getUserList(info)
  //     formData.value = data
  //   }
  // } else if (pageName === "role") {
  //   const { data } = await getRoleList()
  //   formData.value = data
  //   updateForm.value = async (info: object) => {
  //     const { data } = await getRoleList(info)
  //     formData.value = data
  //   }
  // }
  return [formData, updateForm]
}
