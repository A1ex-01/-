<template>
  <div>
    <AxTable v-bind="contentFormConfig" :formData="formData.list">
      <template #top>
        <div class="addUser">
          <span class="title" v-if="title">{{ title }}</span>
          <el-button type="primary">新增用户</el-button>
        </div>
      </template>
      <template #createAt="slotScope">
        {{ utcToTime(slotScope.data) }}
      </template>
      <template #updateAt="slotScope">
        {{ utcToTime(slotScope.data) }}
      </template>
      <template #edit>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
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
    },
    title: {
      type: String,
      default: ""
    },
    showBottom: {
      type: Boolean,
      default: true
    }
  },
  async setup(props) {
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
    const [formData, updateForm] = await useFormDataShow(props.pageName)
    // 当前页码
    const currPage = ref(1)
    // 页码改变事件
    const handleCurrentChange = (val: number) => {
      currPage.value = val
      // 改变后更新数据
      updateForm.value({ offset: (currPage.value - 1) * 10 })
    }
    return {
      formData,
      updateForm,
      utcToTime,
      otherProps,
      currPage,
      handleCurrentChange
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
