import { ITable, ITableItem } from "@/base-ui/table"

const formItems: ITableItem[] = [
  {
    prop: "id",
    label: "类别id",
    minWidth: 120
  },
  {
    prop: "name",
    label: "类别名称",
    minWidth: 120
  },
  {
    prop: "createAt",
    label: "创建时间",
    minWidth: 200,
    slotName: "createAt"
  },
  {
    prop: "updateAt",
    label: "更新时间",
    minWidth: 200,
    slotName: "updateAt"
  },
  {
    label: "操作",
    minWidth: 120,
    slotName: "edit"
  }
]
const showIndex = true
const showCheckBox = false
export const contentFormConfig: ITable = {
  formItems, // 绑定字段对应样式
  showIndex, // 是否显示序号
  showCheckBox // 是否显示复选框
}
