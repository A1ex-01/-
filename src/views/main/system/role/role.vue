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
          ref="contentShow"
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
export default defineComponent({
  name: "role",
  setup() {
    const contentShow = ref<InstanceType<typeof ContentShow>>()
    const searchBtn = async (val: any) => {
      contentShow.value?.updateForm(val)
    }
    const resetBtn = () => {
      console.log("resetd")
    }
    return {
      contentFormConfig,
      searchFormConfig,
      contentShow,
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
