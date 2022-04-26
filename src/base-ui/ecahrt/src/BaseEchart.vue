<template>
  <div>
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, withDefaults } from "vue"
import { onMounted, watch } from "@vue/runtime-core"
import * as echarts from "echarts"
import { EChartsOption } from "echarts"
import chinaMap from "../data/china.json"
// 定义props

// 设置默认值
const props = withDefaults(
  defineProps<{
    option: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: "100%",
    height: "360px"
  }
)
// 绑定dom

echarts.registerMap("china", chinaMap)
const echartDivRef = ref<HTMLElement>()
const echartIns = ref()
onMounted(() => {
  echartIns.value = echarts.init(echartDivRef.value!)
  window.addEventListener("resize", () => {
    echartIns.value.resize()
  })
})
watch(
  () => props.option,
  () => {
    echartIns.value.setOption(props.option)
  }
)
</script>

<style scoped></style>
