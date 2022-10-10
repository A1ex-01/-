<template>
  <div class="nav-header">
    <el-icon :size="25" @click="changeCollapseStatus">
      <component :is="currIcon"></component>
    </el-icon>
    <div class="content">
      <div class="bread-crumb">
        <ax-curmb></ax-curmb>
      </div>
      <div class="user"><user-show></user-show></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeUnmount, ref } from "vue"
import { Fold, Expand } from "@element-plus/icons-vue"
import UserShow from "./UserShow.vue"
import { AxCurmb } from "@/base-ui/crumb/index"

export default defineComponent({
  setup() {
    // collaspe折叠状态
    let currIcon = ref("Fold")
    const changeCollapseStatus = inject("changeCollapseStatus")
    // 获取菜单列表
    // const store = useStore()
    // const usermenus = computed(() => store.state.login.usermenus)
    // 监听路由获取面包屑name
    // const route = useRoute()
    // const curmbInfo: ICrumb[] = reactive([
    //   {
    //     name: ""
    //   },
    //   {
    //     name: ""
    //   }
    // ])
    // const stop = watch(
    //   route,
    //   (val: RouteLocationNormalizedLoaded) => {
    //     const name1 = pathMapMenu(usermenus.value, val.path, "name")
    //     let name2
    //     const parentId = pathMapMenu(usermenus.value, val.path, "parentId")
    //     for (const key of usermenus.value) {
    //       if (key.id === parentId) {
    //         name2 = key.name
    //         break
    //       }
    //     }
    //     curmbInfo[1].name = name1
    //     curmbInfo[0].name = name2
    //   },
    //   {
    //     immediate: true
    //   }
    // )
    onBeforeUnmount(() => {
      stop()
    })
    return {
      currIcon,
      changeCollapseStatus
      // curmbInfo,
      // route
    }
  },
  components: {
    Fold,
    Expand,
    UserShow,
    AxCurmb
  }
})
</script>

<style scoped lang="scss">
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    > div {
      display: flex;
      align-items: center;
    }
  }
}
</style>
