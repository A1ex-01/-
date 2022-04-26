<template>
  <div class="menu">
    <page-search
      :searchFormConfig="searchFormConfig"
      @searchBtn="searchBtn"
      @resetBtn="resetBtn"
    ></page-search>
    <div class="content">
      <suspense
        ><content-show
          :contentFormConfig="contentFormConfig"
          @createInfoBtn="createInfoBtn"
          @editInfo="editInfo"
          :searchData="searchData"
          title="菜单列表"
          pageName="menu"
          ref="contentShowRef"
        >
        </content-show
      ></suspense>
    </div>
    <div class="mask">
      <content-mask
        :maskFormConfig="maskConfig"
        :defaultInfo="defaultInfo"
        @updateTableData="updateTableData"
        ref="maskContentRef"
        pageName="menu"
        title="菜单列表"
      ></content-mask>
    </div>
  </div>
</template>

<script lang="ts">
import { ContentShow } from "@/components/content-show"
import { useMaskData } from "@/hooks/useMaskData"
import { usePageSearch } from "@/hooks/usePageSearch"
import { defineComponent, ref } from "vue"
import { maskFormConfig } from "./config/mask.config"
import { contentFormConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
import ContentMask from "@/components/content-mask/src/ContentMask.vue"
import PageSearch from "@/components/page-search/src/PageSearch.vue"
export default defineComponent({
  name: "menu",
  setup() {
    // 取出maskFormConfig
    const maskConfig = ref({ ...maskFormConfig })
    // 搜索重置逻辑
    const [contentShowRef, searchBtn, resetBtn, searchData] = usePageSearch()
    const [maskContentRef, defaultInfo, createInfoBtn, editInfo] = useMaskData()
    // 更新table数据
    const updateTableData = () => {
      contentShowRef.value.updateForm()
    }
    return {
      searchBtn,
      resetBtn,
      searchFormConfig,
      maskFormConfig,
      contentFormConfig,
      contentShowRef,
      searchData,
      createInfoBtn,
      editInfo,
      maskContentRef,
      defaultInfo,
      maskConfig,
      updateTableData
    }
  },
  components: {
    ContentShow,
    ContentMask,
    PageSearch
  }
})
</script>

<style scoped lang="scss">
.menu {
  .content {
    background-color: white;
    padding: 20px;
  }
}
</style>
