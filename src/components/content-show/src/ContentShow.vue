<template>
  <div>
    <AxTable v-bind="contentFormConfig" :formData="formData.list">
      <template #top>
        <div class="addUser">
          <span style="font-weight: bold">{{
            pageName === "user" ? "用户列表" : "角色列表"
          }}</span>
          <el-button type="primary">新增用户</el-button>
        </div>
      </template>
      <template #enable="slotScope">
        <el-button
          :type="slotScope.data ? 'primary' : 'danger'"
          size="small"
          plain
          >{{ slotScope.data ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #edit>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
      <template #bottom
        ><div class="bottom">
          <el-pagination
            background
            small
            :page-size="5"
            layout="prev, pager, next, jumper"
            :total="formData.totalCount"
          /></div
      ></template>
    </AxTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { AxTable } from "@/base-ui/table/index"
import { useFormDataShow } from "@/hooks/useFormDataShow"
// import { stringMapFn } from "@/utils/stringMapFn"
export default defineComponent({
  props: {
    contentFormConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    // 获取table数据
    const [formData, updateForm] = await useFormDataShow(props.pageName)
    // if (props.pageName === "user") {
    //   const { data } = await getUserList()
    //   formData.value = data
    //   // 更新table
    //   updateForm = async (info: object) => {
    //     const { data } = await getUserList(info)
    //     formData.value = data
    //   }
    // } else if (props.pageName === "role") {
    //   const { data } = await getRoleList()
    //   formData.value = data
    //   console.log("aaa")
    //   // 更新table
    //   updateForm = async (info: object) => {
    //     console.log("222", info)
    //     const { data } = await getRoleList(info)
    //     formData.value = data
    //   }
    // }
    return { formData, updateForm }
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
}
</style>
