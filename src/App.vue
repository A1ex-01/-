<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, provide, getCurrentInstance } from "vue"
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/dist/locale/zh-cn.js"
import en from "element-plus/dist/locale/en.js"
import cache from "./utils/cache"
enum ILocal {
  zhCN = "zhCn",
  en = "en"
}
const app = getCurrentInstance()
const getLanguage = () => {
  const baseLocal = "zhCn"
  const localL = cache.getCache("language")
  if (localL) {
    app!.appContext.config.globalProperties.$i18n.locale =
      localL === "zhCn" ? "zh" : "en"
    return localL === "zhCn" ? zhCn : en
  } else {
    app!.appContext.config.globalProperties.$i18n.locale = "zh"
    cache.setCache("language", baseLocal)
    return zhCn
  }
}
const changeLocale = (val: ILocal) => {
  if (val === ILocal.zhCN) {
    locale.value = zhCn
  } else {
    locale.value = en
  }
}
provide("changeLocale", changeLocale)
// 获取语言包
const locale = ref(getLanguage())
</script>
<style lang="scss" scope>
.app {
  width: 100%;
  height: 100%;
}
</style>
