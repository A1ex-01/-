<template>
  <div class="category">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @searchBtn="searchBtn"
      @resetBtn="resetBtn"
    ></PageSearch>
    <div class="content">
      <suspense
        ><content-show
          :contentFormConfig="contentFormConfig"
          title="类别列表"
          pageName="category"
          ref="contentShowRef"
          :searchData="searchData"
          @createInfoBtn="createInfoBtn"
          @editInfo="editInfo"
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
        pageName="category"
        title="类别列表"
      ></content-mask>
    </div>
  </div>
</template>

<script lang="ts">
import ContentShow from "@/components/content-show/src/ContentShow.vue"
import PageSearch from "@/components/page-search/src/PageSearch.vue"
import { useMaskData } from "@/hooks/useMaskData"
import { usePageSearch } from "@/hooks/usePageSearch"
import { defineComponent, ref } from "vue"
import { maskFormConfig } from "./config/mask.config"
import { contentFormConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
import { ContentMask } from "@/components/content-mask/index"
export default defineComponent({
  components: { ContentShow, PageSearch, ContentMask },
  name: "category",
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
  }
})
</script>

<style scoped lang="scss">
.category {
  .content {
    padding: 20px;
    background-color: white;
  }
}
</style>
