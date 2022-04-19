import { IFormItem } from ".."

export enum IInputType {
  INPUT = "input",
  PASSWORD = "password",
  SELECT = "sellect",
  DATEPICKER = "datepicker"
}
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: object
  colLayout?: object
}
