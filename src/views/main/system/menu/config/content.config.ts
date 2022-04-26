import { ITable, ITableItem } from "@/base-ui/table"

const formItems: ITableItem[] = [
  {
    prop: "name",
    label: "菜单名称",
    minWidth: 100
  },
  {
    prop: "type",
    label: "类型",
    minWidth: 60
  },
  {
    prop: "url",
    label: "菜单url",
    minWidth: 100
  },
  {
    prop: "icon",
    label: "菜单icon",
    minWidth: 120
  },
  {
    prop: "permission",
    label: "按钮权限",
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
const showIndex = false
const showCheckBox = false
export const contentFormConfig: ITable = {
  formItems, // 绑定字段对应样式
  showIndex, // 是否显示序号
  showCheckBox, // 是否显示复选框
  showTree: true
}
