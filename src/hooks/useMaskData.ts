import { ContentMask } from "@/components/content-mask"
import { ref } from "vue"
export function useMaskData(newCb?: () => void, editCb?: (item?: any) => void) {
  // dialogref
  const maskContentRef = ref<InstanceType<typeof ContentMask>>()
  const defaultInfo = ref({})
  // 新建用户
  const createInfoBtn = () => {
    defaultInfo.value = {}
    if (maskContentRef.value) {
      maskContentRef.value.dialogFormVisible = true
    }
    // 打开dialog
    newCb && newCb()
  }
  // 修改用户
  const editInfo = (item: any) => {
    defaultInfo.value = { ...item }
    if (maskContentRef.value) {
      maskContentRef.value.dialogFormVisible = true
    }
    // 打开dialog
    editCb && editCb(item)
  }
  return [maskContentRef, defaultInfo, createInfoBtn, editInfo] as const
}
