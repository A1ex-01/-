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
import { computed, defineComponent, ref, watch } from "vue"
import { allMatch } from "@/service/allMatchFn"
import LocalCache from "@/utils/cache"
import { AxForm } from "@/base-ui/form"
import { ElMessage } from "element-plus"
import { useStore } from "@/store"
import { useRouter } from "vue-router"
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
    const store = useStore()
    const router = useRouter()
    const userinfo = computed(() => store.state.login.userInfo)
    const confirmAdd = async () => {
      dialogFormVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 点击编辑
        const editInfo = { ...maskData.value, id: props.defaultInfo.id }
        if (props.otherInfo) editInfo.menuList = props.otherInfo.menuList
        delete editInfo.password

        const res = await allMatch[props.pageName].editDataInfo(editInfo)

        console.log(props.defaultInfo.id, props.pageName)
        // 如果改的是当前账户的权限,需要重新登录
        if (
          props.pageName === "role" &&
          props.defaultInfo.id === userinfo.value?.role.id
        ) {
          ElMessage({
            type: "warning",
            message: "您改变了当前用户的角色信息,请重新登录~"
          })
          LocalCache.clearCache()
          router.push("/login")
          return
        }
        if (typeof res.data === "string") {
          ElMessage({
            message: res.data,
            type: "warning"
          })
        }
        // 编辑后刷新数据
        emit("updateTableData")
      } else {
        const res = await allMatch[props.pageName].createDataInfo(
          maskData.value
        )
        if (typeof res.data === "string") {
          ElMessage({
            message: res.data,
            type: "warning"
          })
        }
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
