<template>
  <div>
    <el-dialog
      v-model="dialogFormVisible"
      :title="'新建' + title.slice(0, 2)"
      center
      width="40%"
    >
      <ax-form
        v-bind="maskFormConfig"
        v-model="maskData"
        ref="AxFormRef"
      ></ax-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmAdd">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { allMatch } from "@/service/allMatchFn"
import { AxForm } from "@/base-ui/form"
export default defineComponent({
  props: {
    maskFormConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    // dialog显示状态
    const dialogFormVisible = ref(false)
    // dialog绑定的对象
    const maskData = ref<any>({})
    const AxFormRef = ref<InstanceType<typeof AxForm>>()
    watch(
      () => props.defaultInfo,
      (newVal) => {
        // 提取对应表单
        for (const key of props.maskFormConfig.formItems) {
          maskData.value[key.field] = newVal[key.field]
        }
        if (AxFormRef.value) {
          AxFormRef.value.formData = { ...maskData.value }
        }
      },
      {
        immediate: true
      }
    )
    const confirmAdd = async () => {
      dialogFormVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 点击编辑
        const editInfo = { ...maskData.value, id: props.defaultInfo.id }
        if (props.otherInfo) editInfo.menuList = props.otherInfo.menuList
        delete editInfo.password
        console.log(allMatch[props.pageName].createDataInfo)
        await allMatch[props.pageName].editDataInfo(editInfo)
        // 编辑后刷新数据
        emit("updateTableData")
      } else {
        console.log(allMatch[props.pageName].createDataInfo)
        allMatch[props.pageName].createDataInfo(maskData.value)
        // 新建后刷新数据
        emit("updateTableData")
      }
    }
    return { dialogFormVisible, maskData, AxFormRef, confirmAdd, allMatch }
  },
  components: { AxForm }
})
</script>

<style scoped></style>
