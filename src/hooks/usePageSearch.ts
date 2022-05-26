import { ContentShow } from "@/components/content-show"
import { ref } from "vue"
export function usePageSearch() {
  const contentShowRef: any = ref<InstanceType<typeof ContentShow>>()
  const searchData = ref(null)
  // 接收父组件点击搜索事件
  const searchBtn = async (val: any) => {
    // 拿到search的数据
    searchData.value = val
    // 获取第一页的数据
    contentShowRef.value?.updateForm(val)
    // 将contentshow的页码设置为1
    if (contentShowRef.value) {
      contentShowRef.value.currPage = 1
    }
  }
  // 点击重置
  const resetBtn = () => {
    // 获取axform实例并调用其中的reset方法
    ;("resed")
  }
  return [contentShowRef, searchBtn, resetBtn, searchData]
}
