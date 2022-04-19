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
    label: "权限介绍",
    placeHolder: "请输入权限介绍"
  },
  {
    field: "createAt",
    type: IInputType.DATEPICKER,
    label: "创建时间",
    otherOptions: {
      "range-separator": "-",
      "start-placeholder": "Start date",
      "end-placeholder": "End date"
    }
  }
]
const labelWidth = "100px"
const itemStyle = { padding: "10px 40px" }
export const searchFormConfig: IForm = {
  formItems, // 表单类型
  labelWidth, // label宽度
  itemStyle // 样式配置
}
