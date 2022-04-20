<template>
  <div class="goods">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @searchBtn="searchBtn"
      @resetBtn="resetBtn"
    ></PageSearch>
    <div class="content">
      <suspense
        ><content-show
          :contentFormConfig="contentFormConfig"
          title="商品信息"
          pageName="good"
          ref="contentShowRef"
        >
          <template #imgUrl="slotScope">
            <el-image
              style="width: 60px; height: 60px"
              :src="slotScope.data"
              fit="cover"
            />
          </template>
          <template #status="slotScope">
            <el-button
              :type="slotScope.data ? 'primary' : 'danger'"
              size="small"
              plain
              >{{ slotScope.data ? "启用" : "禁用" }}</el-button
            ></template
          >
          <template #oldPrice="slotScope">{{ `￥${slotScope.data}` }}</template>
          <template #newPrice="slotScope">{{ `￥${slotScope.data}` }}</template>
        </content-show></suspense
      >
    </div>
  </div>
</template>

<script lang="ts">
import ContentShow from "@/components/content-show/src/ContentShow.vue"
import PageSearch from "@/components/page-search/src/PageSearch.vue"
import { usePageSearch } from "@/hooks/usePageSearch"
import { defineComponent } from "vue"
import { contentFormConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
export default defineComponent({
  components: { ContentShow, PageSearch },
  name: "goods",
  setup() {
    const [contentShowRef, searchBtn, resetBtn] = usePageSearch()
    return {
      contentFormConfig,
      searchFormConfig,
      contentShowRef,
      searchBtn,
      resetBtn
    }
  }
})
</script>

<style scoped lang="scss">
.goods {
  .content {
    padding: 20px;
    background-color: white;
  }
}
</style>
