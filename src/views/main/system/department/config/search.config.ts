import { IFormItem, IInputType } from "@/base-ui/form"
import { IForm } from "@/base-ui/form/types"

const formItems: IFormItem[] = [
  {
    field: "id",
    type: IInputType.INPUT,
    label: "id",
    placeHolder: "请输入id"
  },
  {
    field: "name",
    type: IInputType.INPUT,
    label: "部门名称",
    placeHolder: "请输入部门名称"
  },
  {
    field: "leader",
    type: IInputType.INPUT,
    label: "管理",
    placeHolder: "请输入管理人"
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
