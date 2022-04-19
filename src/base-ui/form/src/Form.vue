<template>
  <div class="ax-form">
    <slot name="top"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type === IInputType.INPUT">
                <el-input v-model="formData[item.field]" />
              </template>
              <template v-else-if="item.type === IInputType.PASSWORD">
                <el-input type="password" v-model="formData[item.field]" />
              </template>
              <template v-else-if="item.type === IInputType.SELECT">
                <el-select
                  v-model="formData[item.field]"
                  class="m-2"
                  :placeholder="item.placeHolder || 'Select'"
                  size="default"
                >
                  <el-option
                    v-for="item in item.options"
                    :key="item.value"
                    :label="item.key"
                    :value="item.value"
                    v-model="formData[item.field]"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === IInputType.DATEPICKER">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                  type="daterange"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="bottom"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue"
import { IFormItem, IInputType } from "../index"
export default defineComponent({
  props: {
    modelValue: {
      // form数据
      type: Object,
      required: true
    },
    formItems: {
      // form内的布局的样式配置
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      // el-form的label宽度
      type: String,
      default: "100px"
    },
    itemStyle: {
      // 每项el-form-item的样式
      type: Object,
      default: () => ({
        padding: "10px 40px"
      })
    },
    colLayout: {
      //一行的份数
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit("update:modelValue", newValue)
      },
      { deep: true }
    )
    return { IInputType, formData }
  }
})
</script>

<style scoped lang="scss">
.ax-form {
  padding-top: 22px;
  margin-bottom: 20px;
}
</style>
