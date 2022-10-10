<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="logo-img" src="../../../assets/cms.svg" alt="" />
      <span class="title" v-if="!isCollapse">Vue3+TS</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#333744"
      class="el-menu-vertical-demo"
      :default-active="defaultActive + ''"
      text-color="#fff"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <template v-for="item in usermenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <component :is="item.icon.slice(8)" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-if="item.type === 1">
            <template v-for="v in item.children" :key="v.id">
              <el-menu-item :index="v.id + ''" @click="navClick(v.url)">{{
                v.name
              }}</el-menu-item>
            </template>
          </template>
          <template v-else></template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store/index"
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  ref,
  watch
} from "vue"
import { Monitor, Setting, Goods, ChatLineRound } from "@element-plus/icons-vue"
import { useRoute, useRouter } from "vue-router"
import { pathMapMenu } from "@/utils/mapMenus"
export default defineComponent({
  setup() {
    const store = useStore()
    const usermenus = computed(() => store.state.login.usermenus)
    const isCollapse = inject("isCollapse")
    // tab点击跳转
    const router = useRouter()
    const navClick = (url: any) => {
      router.push({ path: url })
    }
    // 监听路由跳转跟新defaultActive
    const route = useRoute()
    const defaultActive = ref()
    const stop = watch(
      route,
      (val) => {
        defaultActive.value = pathMapMenu(usermenus.value, val.path, "id")
      },
      {
        immediate: true
      }
    )
    onBeforeUnmount(() => {
      stop()
    })
    return {
      usermenus,
      isCollapse,
      navClick,
      defaultActive
    }
  },
  components: {
    Monitor,
    Setting,
    Goods,
    ChatLineRound
  }
})
</script>

<style scoped lang="scss">
.nav-menu {
  width: 100%;
  .logo {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    &-img {
      width: 24px;
      margin: 0 5px;
    }
  }
}
.el-menu-vertical-demo {
  border-right: 0;
}
</style>
