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
    field: "newPrice",
    type: IInputType.INPUT,
    label: "商品价格",
    placeHolder: "请输入商品价格"
  },
  {
    field: "status",
    type: IInputType.SELECT,
    label: "商品状态",
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
    field: "address",
    type: IInputType.INPUT,
    label: "商品地址",
    placeHolder: "请输入商品地址"
  }
]
const labelWidth = "100px"
const itemStyle = { padding: "10px 40px" }
export const searchFormConfig: IForm = {
  formItems, // 表单类型
  labelWidth, // label宽度
  itemStyle // 样式配置
}
