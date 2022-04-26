import { ITable, ITableItem } from "@/base-ui/table"

const formItems: ITableItem[] = [
  {
    prop: "id",
    label: "id",
    minWidth: 90
  },
  {
    prop: "name",
    label: "昵称",
    minWidth: 120
  },
  {
    prop: "realname",
    label: "姓名",
    minWidth: 120
  },
  {
    prop: "enable",
    label: "状态",
    minWidth: 120,
    slotName: "enable",
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
    prop: "cellphone",
    label: "电话号码",
    minWidth: 150
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
