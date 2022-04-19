<template>
  <div class="search">
    <AxForm v-bind="searchFormConfig" v-model="formData" ref="axForm">
      <template #bottom>
        <div class="bottom">
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleReset">重置</el-button>
        </div>
      </template>
    </AxForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { AxForm } from "@/base-ui/form/index"
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    // 根据定义属性生成对应空值对象
    const formItems = props.searchFormConfig?.formItems || []
    const formDataOrigin: any = {}
    for (const key of formItems) {
      formDataOrigin[key.field] = ""
    }
    // 生成响应式输出对象
    const formData = ref(formDataOrigin)
    // AxForm实例
    const axForm = ref<InstanceType<typeof AxForm>>()
    // 用户点击重置
    const handleReset = () => {
      if (axForm.value) {
        for (const key of formItems) {
          axForm.value.formData[key.field] = formDataOrigin[key.field]
        }
      }
      emit("resetBtn")
    }
    // 用户点击搜索
    const handleSearch = () => {
      // 获取表单数据
      emit("searchBtn", formData.value)
    }
    return { formData, handleSearch, handleReset, axForm }
  },
  components: {
    AxForm
  }
})
</script>

<style scoped lang="scss">
.search {
  background-color: white;
}
.bottom {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
}
</style>
