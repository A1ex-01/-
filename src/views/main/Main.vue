<template>
  <div class="main">
    <div class="common-layout">
      <el-container class="main-container">
        <el-aside class="page-aside" :width="isCollapse ? '64px' : '210px'">
          <Navmenu></Navmenu>
        </el-aside>
        <el-container class="page-container">
          <el-header class="page-header">
            <nav-header></nav-header>
          </el-header>
          <el-main class="page-main">
            <div class="page-infoc">
              <suspense>
                <router-view></router-view>
              </suspense>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue"
import Navmenu from "@/components/nav-menu/index"
import NavHeader from "@/components/nav-header/index"
export default defineComponent({
  setup() {
    const isCollapse = ref(false)
    const changeCollapseStatus = () => {
      isCollapse.value = !isCollapse.value
    }
    provide("changeCollapseStatus", changeCollapseStatus)
    provide("isCollapse", isCollapse)
    return {
      isCollapse
    }
  },
  components: {
    Navmenu,
    NavHeader
  }
})
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  .common-layout {
    width: 100%;
    height: 100%;
    .main-container {
      width: 100%;
      height: 100%;
      background-color: #f4f4f4;
      .page-main {
        width: 100%;
        height: 100%;
        .page-infoc {
          background-color: #f4f4f4;
          border-radius: 5px;
        }
      }
      .page-aside {
        background-color: hsl(226, 14%, 23%);
        transition: width 0.28s;
      }
    }
  }
}
.el-header {
  height: 50px;
  background-color: white;
  line-height: 50px;
}
</style>
