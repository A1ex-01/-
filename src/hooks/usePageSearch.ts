import { ContentShow } from "@/components/content-show"
import { ref } from "vue"
export function usePageSearch() {
  const contentShowRef = ref<InstanceType<typeof ContentShow>>()
  // 点击搜索
  const searchBtn = async (val: any) => {
    contentShowRef.value?.updateForm(val)
  }
  // 点击重置
  const resetBtn = () => {
    // 获取axform实例并调用其中的reset方法
    console.log("resed")
  }
  return [contentShowRef, searchBtn, resetBtn]
}
