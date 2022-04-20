<template>
  <div class="user">
    <PageSeatch
      :searchFormConfig="searchFormConfig"
      @searchBtn="searchBtn"
      @resetBtn="resetBtn"
    ></PageSeatch>
    <div class="content">
      <suspense
        ><content-show
          :contentFormConfig="contentFormConfig"
          pageName="role"
          title="角色管理"
          ref="contentShowRef"
        >
        </content-show
      ></suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import PageSeatch from "@/components/page-search/src/PageSearch.vue"
import { contentFormConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
import ContentShow from "@/components/content-show/src/ContentShow.vue"
import { usePageSearch } from "@/hooks/usePageSearch"
export default defineComponent({
  name: "role",
  setup() {
    const [contentShowRef, searchBtn, resetBtn] = usePageSearch()
    return {
      contentFormConfig,
      searchFormConfig,
      contentShowRef,
      searchBtn,
      resetBtn
    }
  },
  components: {
    ContentShow,
    PageSeatch
  }
})
</script>

<style scoped lang="scss">
.user {
  padding: 20px;
  .content {
    margin-top: 20px;
    background-color: white;
    padding: 20px;
  }
}
</style>
