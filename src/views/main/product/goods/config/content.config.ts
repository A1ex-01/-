import { ITable, ITableItem } from "@/base-ui/table"

const formItems: ITableItem[] = [
  {
    prop: "name",
    label: "商品名称",
    minWidth: 120
  },
  {
    prop: "oldPrice",
    label: "原价格",
    minWidth: 100,
    slotName: "oldPrice"
  },
  {
    prop: "newPrice",
    label: "现价格",
    minWidth: 100,
    slotName: "newPrice"
  },
  {
    prop: "imgUrl",
    label: "商品图片",
    minWidth: 120,
    slotName: "imgUrl"
  },
  {
    prop: "status",
    label: "状态",
    minWidth: 100,
    slotName: "status"
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
