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
    label: "用户名",
    placeHolder: "请输入用户名"
  },
  {
    field: "realname",
    type: IInputType.INPUT,
    label: "真实姓名",
    placeHolder: "请输入真实姓名"
  },
  {
    field: "cellphone",
    type: IInputType.INPUT,
    label: "电话号码",
    placeHolder: "请输入电话号码"
  },
  {
    field: "enable",
    type: IInputType.SELECT,
    label: "用户状态",
    placeHolder: "请选择用户状态",
    options: [
      {
        key: "开启",
        value: 1
      },
      {
        key: "禁用",
        value: 0
      }
    ]
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
