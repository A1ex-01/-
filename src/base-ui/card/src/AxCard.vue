<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span class="title">{{ title }}</span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.title {
  /* font-size: 16px; */
  font-weight: bold;
}
</style>
