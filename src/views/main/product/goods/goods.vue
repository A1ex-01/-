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
          pageName="goods"
          ref="contentShowRef"
          :searchData="searchData"
          @createInfoBtn="createInfoBtn"
          @editInfo="editInfo"
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
    <div class="mask">
      <content-mask
        :maskFormConfig="maskConfig"
        :defaultInfo="defaultInfo"
        @updateTableData="updateTableData"
        ref="maskContentRef"
        pageName="goods"
        title="商品列表"
      ></content-mask>
    </div>
  </div>
</template>

<script lang="ts">
import ContentShow from "@/components/content-show/src/ContentShow.vue"
import PageSearch from "@/components/page-search/src/PageSearch.vue"
import { useMaskData } from "@/hooks/useMaskData"
import { usePageSearch } from "@/hooks/usePageSearch"
import { computed, defineComponent, ref } from "vue"
import { useStore } from "vuex"
import { maskFormConfig } from "./config/mask.config"
import { contentFormConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
export default defineComponent({
  components: { ContentShow, PageSearch },
  name: "goods",
  setup() {
    // 取出maskFormConfig
    const maskConfig = ref({ ...maskFormConfig })
    // 获取角色列表
    const store = useStore()
    store.dispatch("login/getDepartList")
    store.dispatch("login/getRoleList")
    // 获取角色和部门数据
    const departList = computed(() => store.state.login.departList)
    const roleList = computed(() => store.state.login.roleList)
    // 搜索重置逻辑
    const [contentShowRef, searchBtn, resetBtn, searchData] = usePageSearch()
    // 是否获取过去部门表和角色表
    const isGetedList = ref(false)
    // 是否显示与隐藏密码栏
    const newCallback = () => {
      const passwordItem = maskConfig.value.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHiden = false
      if (!isGetedList.value) {
        // 获取下拉角色表数据
        const roleIdItem = maskConfig.value.formItems.find(
          (item) => item.field === "roleId"
        )
        roleIdItem!.options = roleList.value.map((item: any) => ({
          key: item.name,
          value: item.id
        }))
        // 获取下拉部门表数据
        const departIdItem = maskConfig.value.formItems.find(
          (item) => item.field === "departmentId"
        )
        departIdItem!.options = departList.value.map((item: any) => ({
          key: item.name,
          value: item.id
        }))
        isGetedList.value = true
      }
    }
    const editCallback = () => {
      const passwordItem = maskConfig.value.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHiden = true
      if (!isGetedList.value) {
        // 获取下拉角色表数据
        const roleIdItem = maskConfig.value.formItems.find(
          (item) => item.field === "roleId"
        )
        roleIdItem!.options = roleList.value.map((item: any) => ({
          key: item.name,
          value: item.id
        }))
        // 获取下拉部门表数据
        const departIdItem = maskConfig.value.formItems.find(
          (item) => item.field === "departmentId"
        )
        departIdItem!.options = departList.value.map((item: any) => ({
          key: item.name,
          value: item.id
        }))
        isGetedList.value = true
      }
    }
    const [maskContentRef, defaultInfo, createInfoBtn, editInfo] = useMaskData(
      newCallback,
      editCallback
    )
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
.goods {
  .content {
    padding: 20px;
    background-color: white;
  }
}
</style>
