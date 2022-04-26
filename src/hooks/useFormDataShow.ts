// import { getUserList } from "@/service/user/user"
// import { getRoleList } from "@/service/role/role"
import { allMatch } from "@/service/allMatchFn"
import { ref } from "vue"
export async function useFormDataShow(pageName: string) {
  const formData = ref<any>()
  const { data } = await allMatch[pageName].getDataList()
  formData.value = data
  const updateForm = async (info?: object) => {
    // 传入配置更新信息
    const { data } = await allMatch[pageName].getDataList(info || {})
    formData.value = data
  }
  const deleteBtn = async (id: number | string) => {
    await allMatch[pageName].deleteDataInfo(id)
  }
  return [formData, updateForm, deleteBtn] as const
}
