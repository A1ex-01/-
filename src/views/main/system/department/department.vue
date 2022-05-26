<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @searchBtn="searchBtn"
      @resetBtn="resetBtn"
    ></page-search>
    <div class="content">
      <suspense
        ><content-show
          :contentFormConfig="contentFormConfig"
          title="部门列表"
          pageName="department"
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
        pageName="department"
        title="部门列表"
      ></content-mask>
    </div>
  </div>
</template>

<script lang="ts">
import { useMaskData } from "@/hooks/useMaskData"
import { usePageSearch } from "@/hooks/usePageSearch"
import { useStore } from "vuex"
import { computed, defineComponent, ref } from "vue"
import { maskFormConfig } from "./config/mask.config"
import { contentFormConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
export default defineComponent({
  name: "department",
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
      if (passwordItem) passwordItem!.isHiden = false
      if (!isGetedList.value) {
        // 获取下拉角色表数据
        const roleIdItem = maskConfig.value.formItems.find(
          (item) => item.field === "roleId"
        )
        if (roleIdItem) {
          roleIdItem!.options = roleList.value.map((item: any) => ({
            key: item.name,
            value: item.id
          }))
        }
        // 获取下拉部门表数据
        const departIdItem = maskConfig.value.formItems.find(
          (item) => item.field === "departmentId"
        )
        if (departIdItem) {
          departIdItem!.options = departList.value.map((item: any) => ({
            key: item.name,
            value: item.id
          }))
        }
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
    // 点击状态按钮
    // const changeStatus = async (val: any) => {
    //   delete val.createAt
    //   delete val.updateAt
    //   await maskContentRef.value?.allMatch["users"].editDataInfo({
    //     ...val,
    //     enable: val.enable == 0 ? 0 : 1
    //   })
    //   updateTableData()
    // }
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
.content {
  background-color: white;
  padding: 20px;
  // box-sizing: border-box;
}
</style>
