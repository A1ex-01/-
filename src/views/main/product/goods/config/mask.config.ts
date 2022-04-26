import { IFormItem, IInputType } from "@/base-ui/form"
import { IForm } from "@/base-ui/form/types"
const formItems: IFormItem[] = [
  {
    field: "name",
    type: IInputType.INPUT,
    label: "商品名称",
    placeHolder: "请输入商品名称"
  },
  {
    field: "desc",
    type: IInputType.INPUT,
    label: "商品描述",
    placeHolder: "请输入商品描述"
  },
  {
    field: "newPrice",
    type: IInputType.INPUT,
    label: "商品价格",
    placeHolder: "请输入商品价格"
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
