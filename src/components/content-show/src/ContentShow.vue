<template>
  <div>
    <AxTable v-bind="contentFormConfig" :formData="formData.list">
      <template #top>
        <div class="addUser">
          <span class="title" v-if="title">{{ title }}</span>
          <el-button type="primary" :disabled="!isCreate" @click="createInfoBtn"
            >新增{{ title.slice(0, 2) }}</el-button
          >
        </div>
      </template>
      <template #createAt="slotScope">
        {{ utcToTime(slotScope.data) }}
      </template>
      <template #updateAt="slotScope">
        {{ utcToTime(slotScope.data) }}
      </template>
      <template #edit="slotScope">
        <el-button
          type="text"
          size="small"
          :disabled="!isUpdate"
          @click="editInfo(slotScope.data.row)"
          >编辑</el-button
        >
        <el-popover
          v-model:visible="visibles[slotScope.data.$index]"
          placement="top"
          :width="160"
        >
          <p>你确定要删除该信息吗?</p>
          <div style="text-align: right; margin: 0">
            <el-button
              size="small"
              type="text"
              @click="visibles[slotScope.data.$index] = false"
              >取消</el-button
            >
            <el-button
              size="small"
              type="primary"
              @click="delInfo(slotScope.data.row, slotScope.data.$index)"
              >确定</el-button
            >
          </div>
          <template #reference>
            <el-button
              type="text"
              size="small"
              :disabled="!isDelete"
              @click="visibles[slotScope.data.$index] = true"
              >删除</el-button
            >
          </template>
        </el-popover>
      </template>
      <template v-if="showBottom" #bottom
        ><div class="bottom">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currPage"
            background
            small
            :page-size="10"
            layout="prev, pager, next, jumper,total"
            :total="formData.totalCount"
          /></div
      ></template>
      <template
        #[item.prop]="slotScope"
        v-for="item in otherProps"
        :key="item.prop"
      >
        <slot :name="item.slotName" :data="slotScope.data"></slot>
      </template>
    </AxTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { AxTable } from "@/base-ui/table/index"
import { useFormDataShow } from "@/hooks/useFormDataShow"
import { utcToTime } from "@/utils/formatTime"
import { usePermission } from "@/hooks/usePermision"
import { ElMessage } from "element-plus"
export default defineComponent({
  props: {
    contentFormConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ""
    },
    showBottom: {
      type: Boolean,
      default: true
    },
    searchData: {
      type: Object,
      default: () => ({})
    }
  },
  async setup(props, { emit }) {
    // 获取权限
    const isCreate = usePermission(props.pageName, "create")
    const isDelete = usePermission(props.pageName, "delete")
    const isUpdate = usePermission(props.pageName, "update")
    const isQuery = usePermission(props.pageName, "query")

    // 搜集非默认的prop并生成插槽
    const otherProps = props.contentFormConfig?.formItems.filter(
      (item: any) => {
        if (item?.slotName === "top") {
          return false
        }
        if (item?.slotName === "createAt") {
          return false
        }
        if (item?.slotName === "updateAt") {
          return false
        }
        if (item?.slotName === "edit") {
          return false
        }
        if (item?.slotName === "bottom") {
          return false
        }
        return !!item?.slotName
      }
    )
    // 获取table数据
    const [formData, updateForm, deleteBtn] = await useFormDataShow(
      props.pageName
    )
    // 当前页码
    const currPage = ref(1)
    // 页码改变事件
    const handleCurrentChange = (val: number) => {
      currPage.value = val
      // 拿到search的formdata
      // 改变后更新数据
      updateForm({
        ...props.searchData,
        offset: (currPage.value - 1) * 10
      })
    }
    // 点击新建
    const createInfoBtn = () => {
      emit("createInfoBtn")
    }
    // 点击编辑
    const editInfo = (val: any) => {
      // ("editinfo:", val, formData)
      emit("editInfo", val)
    }
    // 删除提示框状态组
    const visibles = ref(Array(formData.value.list.length).fill(false))
    const delInfo = async (val: any, index: number) => {
      visibles.value[index] = false
      await deleteBtn(val.id)
      await updateForm()
      ElMessage({
        message: "删除成功",
        type: "success"
      })
    }
    return {
      formData,
      updateForm,
      utcToTime,
      otherProps,
      currPage,
      handleCurrentChange,
      isCreate,
      isDelete,
      isUpdate,
      isQuery,
      editInfo,
      delInfo,
      visibles,
      createInfoBtn
    }
  },
  components: {
    AxTable
  }
})
</script>

<style scoped lang="scss">
.bottom {
  width: 100%;
  padding: 10px 0;
}
.addUser {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .title {
    font-weight: bold;
  }
}
</style>
