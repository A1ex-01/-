<template>
  <div class="curmb">
    <el-breadcrumb separator="/">
      <template v-for="item in curmbs" :key="item.name">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { ICrumb } from "../index"
export default defineComponent({
  props: {
    curmbs: {
      type: Array as PropType<ICrumb[]>
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
