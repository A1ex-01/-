import AxForm from "./src/Form.vue"
import { IInputType } from "./types"
interface IFormItem {
  field: string
  type: IInputType
  label: string
  rules?: any[]
  placeHolder?: any
  options?: any[]
  otherOptions?: object
  isHiden?: boolean
}
interface IFormData {
  id: string
  password: string
  sport: string
  createTime: string[]
}
export { AxForm, IInputType, IFormItem, IFormData }
