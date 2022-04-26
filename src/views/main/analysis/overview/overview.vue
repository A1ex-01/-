<template>
  <div class="overview">
    <div class="about">
      <AxCard title="关于">
        <div>
          Vue3Admin是基于Vue3、Vuex、VueRouter、ElementPlus、Typescript、Echarts5等的后台系统解决方案。
        </div>
      </AxCard>
    </div>
    <div class="rely">
      <AxCard title="目录结构">
        <div>
          <pre>
      ├─assets
      │  ├─css
      │  └─img
      ├─base-ui
      │  ├─card
      │  │  ├─src
      │  │  └─types
      │  ├─crumb
      │  │  ├─src
      │  │  └─types
      │  ├─ecahrt
      │  │  ├─data
      │  │  └─src
      │  ├─form
      │  │  ├─src
      │  │  └─types
      │  └─table
      │      ├─src
      │      └─types
      ├─components
      │  ├─content-mask
      │  │  └─src
      │  ├─content-show
      │  │  └─src
      │  ├─nav-header
      │  │  └─src
      │  ├─nav-menu
      │  │  └─src
      │  └─page-search
      │      └─src
      ├─hooks
      ├─router
      │  └─main
      │      ├─analysis
      │      │  ├─dashboard
      │      │  └─overview
      │      ├─product
      │      │  ├─category
      │      │  └─goods
      │      ├─story
      │      │  ├─chat
      │      │  └─list
      │      └─system
      │          ├─department
      │          ├─menu
      │          ├─role
      │          └─user
      ├─service
      │  ├─category
      │  ├─depart
      │  ├─ecahrts
      │  ├─goods
      │  ├─login
      │  ├─menu
      │  ├─request
      │  ├─role
      │  └─user
      ├─store
      │  ├─login
      │  └─views
      ├─utils
      └─views
          ├─login
          │  └─cpns
          ├─main
          │  ├─analysis
          │  │  ├─dashboard
          │  │  └─overview
          │  ├─product
          │  │  ├─category
          │  │  │  └─config
          │  │  └─goods
          │  │      └─config
          │  ├─story
          │  │  ├─chat
          │  │  └─list
          │  └─system
          │      ├─department
          │      │  └─config
          │      ├─menu
          │      │  └─config
          │      ├─role
          │      │  └─config
          │      └─user
          │          └─config
          └─not-found

    </pre
          >
        </div>
      </AxCard>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import AxCard from "@/base-ui/card/src/AxCard.vue"
export default defineComponent({
  components: {
    AxCard
  }
})
</script>

<style scoped>
.rely {
  margin-top: 20px;
}
</style>
