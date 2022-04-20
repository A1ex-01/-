<template>
  <div class="user">
    <div>
      <page-search
        :searchFormConfig="searchFormConfig"
        @searchBtn="searchBtn"
        @resetBtn="resetBtn"
      ></page-search>
      <div class="content">
        <suspense
          ><content-show
            :contentFormConfig="contentFormConfig"
            title="用户列表"
            pageName="user"
            ref="contentShowRef"
          >
            <template #enable="slotScope"
              ><el-button
                :type="slotScope.data ? 'primary' : 'danger'"
                size="small"
                plain
                >{{ slotScope.data ? "启用" : "禁用" }}</el-button
              ></template
            >
          </content-show></suspense
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PageSearch from "@/components/page-search/src/PageSearch.vue"
import { defineComponent } from "vue"
import { searchFormConfig } from "@/views/main/system/user/config/search.config"
import { contentFormConfig } from "./config/content.config"
// import { getUserList } from "@/service/user/user"
import { ContentShow } from "@/components/content-show"
import { usePageSearch } from "@/hooks/usePageSearch"
export default defineComponent({
  components: { PageSearch, ContentShow },
  name: "user",
  setup() {
    // 搜索和重置
    const [contentShowRef, searchBtn, resetBtn] = usePageSearch()
    return {
      searchBtn,
      resetBtn,
      searchFormConfig,
      // useList,
      contentFormConfig,
      contentShowRef
    }
  }
})
</script>

<style scoped lang="scss">
.content {
  background-color: white;
  padding: 20px;
  // box-sizing: border-box;
}
</style>
