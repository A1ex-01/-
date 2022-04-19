<template>
  <div>
    <slot name="top"></slot>
    <el-table
      v-loading="formData ? false : true"
      :data="formData"
      border
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column v-if="showCheckBox" type="selection"></el-table-column>
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        width="80"
      ></el-table-column>
      <template v-for="item in formItems" :key="item.id">
        <template v-if="!item.slotName && item.prop">
          <template v-if="item.prop !== 'createAt' && item.prop !== 'updateAt'">
            <el-table-column v-bind="item" />
          </template>
          <template v-else>
            <el-table-column v-bind="item">
              <template #default="scope">
                {{ utcToTime(scope.row[item.prop]) }}
              </template></el-table-column
            >
          </template>
        </template>
        <template v-if="item.slotName && item.prop">
          <el-table-column v-bind="item">
            <template #default="scope">
              <slot :name="item.slotName" :data="scope.row[item.prop]"></slot>
            </template>
          </el-table-column>
        </template>
        <template v-if="!item.prop">
          <el-table-column v-bind="item">
            <slot :name="item.slotName"></slot>
          </el-table-column>
        </template>
      </template>
    </el-table>
    <slot name="bottom"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { ITableItem } from "../index"
import { utcToTime } from "@/utils/formatTime"
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<ITableItem[]>,
      required: true
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showCheckBox: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      required: true
    }
  },
  setup() {
    return { utcToTime }
  }
})
</script>

<style scoped></style>
