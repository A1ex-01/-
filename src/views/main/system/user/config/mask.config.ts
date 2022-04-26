import { IFormItem, IInputType } from "@/base-ui/form"
import { IForm } from "@/base-ui/form/types"
const formItems: IFormItem[] = [
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
    field: "password",
    type: IInputType.INPUT,
    label: "密码",
    placeHolder: "请输入密码",
    isHiden: true
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
    field: "roleId",
    type: IInputType.SELECT,
    label: "选择角色",
    placeHolder: "请选择角色",
    options: []
  },
  {
    field: "departmentId",
    type: IInputType.SELECT,
    label: "选择部门",
    placeHolder: "请选择部门",
    options: []
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
