export interface ITableData {
  id: number
  name: string
  realname: string
  enable: number
  createAt: string
  updateAt: string
}
export interface ITableItem {
  prop?: string
  label: string
  minWidth?: number
  slotName?: string
  options?: any
}
export interface ITable {
  formItems: ITableItem[]
  showIndex: boolean
  showCheckBox: boolean
  showTree?: boolean
}
