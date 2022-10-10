<template>
  <div class="curmb">
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in curmbs" :key="index">
        <el-breadcrumb-item>{{ item }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"
export default defineComponent({
  setup() {
    // meta获取动态路由面包屑
    const route = useRoute()
    // 通过组件查询面包屑
    const store = useStore()
    const menu = computed(() => store.state.login.usermenus)
    function crumbNameToName(crumb: string, menu: any[]) {
      const curmbs: string[] = []
      // menu.forEach((item) => {
      //   for (const k of item.children) {
      //     if (k.url === crumb) {
      //       curmbs.push(item.name)
      //       curmbs.push(k.name)
      //       break
      //     }
      //   }
      // })
      for (const value of menu) {
        for (const k of value.children) {
          if (k.url === crumb) {
            curmbs.push(value.name)
            curmbs.push(k.name)
            break
          }
        }
      }
      return curmbs
    }
    const curmbs = computed(() =>
      crumbNameToName(route.meta.crumb as string, menu.value)
    )
    return { route, curmbs }
  }
})
</script>

<style scoped></style>
