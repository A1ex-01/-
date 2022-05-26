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
        :otherInfo="otherInfo"
        ref="maskContentRef"
        pageName="role"
        title="角色管理"
        ><div class="tree">
          <p>角色权限</p>
          <el-tree
            :data="alltree"
            :props="{
              children: 'children',
              label: 'name'
            }"
            show-checkbox
            node-key="id"
            ref="treeRef"
            @check="handleCheckChange"
          /></div
      ></content-mask>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from "vue"
import PageSeatch from "@/components/page-search/src/PageSearch.vue"
import { contentFormConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
import ContentShow from "@/components/content-show/src/ContentShow.vue"
import { usePageSearch } from "@/hooks/usePageSearch"
import { maskFormConfig } from "./config/mask.config"
import { useMaskData } from "@/hooks/useMaskData"
import { ContentMask } from "@/components/content-mask"
import { useStore } from "vuex"
import { ElTree } from "element-plus"
export default defineComponent({
  name: "role",
  setup() {
    // 取出maskFormConfig
    const maskConfig = ref({ ...maskFormConfig })
    // concat editCb
    const treeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      // 获取所有id
      const menus: any = []
      const deepGetId = (menuList: any) => {
        for (const key in menuList) {
          if (menuList[key].children) {
            deepGetId(menuList[key].children)
          } else {
            menus.push(menuList[key].id)
          }
        }
      }
      deepGetId(item.menuList)
      nextTick(() => {
        treeRef.value?.setCheckedKeys(menus, false)
      })
    }
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    // 搜索重置逻辑
    const [contentShowRef, searchBtn, resetBtn, searchData] = usePageSearch()
    const [maskContentRef, defaultInfo, createInfoBtn, editInfo] = useMaskData(
      undefined,
      editCallback
    )
    // 获取完整菜单树
    const store = useStore()
    store.dispatch("login/getAllMenuTree")
    // 完整菜单树
    const alltree = computed(() => store.state.login.allMenuList)
    // 更新table数据
    const updateTableData = () => {
      contentShowRef.value.updateForm()
    }
    // 获取otherInfo
    const otherInfo = ref({})
    return {
      contentFormConfig,
      searchFormConfig,
      contentShowRef,
      searchBtn,
      resetBtn,
      searchData,
      updateTableData,
      maskContentRef,
      defaultInfo,
      createInfoBtn,
      editInfo,
      maskConfig,
      alltree,
      otherInfo,
      treeRef,
      handleCheckChange
    }
  },
  components: {
    ContentShow,
    PageSeatch,
    ContentMask
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
.tree {
  margin-left: 70px;
}
</style>
