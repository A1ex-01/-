import { IFormItem, IInputType } from "@/base-ui/form"
import { IForm } from "@/base-ui/form/types"
const formItems: IFormItem[] = [
  {
    field: "name",
    type: IInputType.INPUT,
    label: "角色名称",
    placeHolder: "请输入角色名称"
  },
  {
    field: "intro",
    type: IInputType.INPUT,
    label: "角色介绍",
    placeHolder: "请输入角色介绍"
  }
]
const labelWidth = "100px"
const itemStyle = { padding: "10px 40px" }
const colLayout = {
  span: 24
}
export const maskFormConfig: IForm = {
  formItems, // 表单类型
  labelWidth, // label宽度
  itemStyle, // 样式配置
  colLayout // 排列方式
}
