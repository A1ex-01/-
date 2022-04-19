export interface IAccount {
  name: string
  password: string
}
export interface ILoginResult {
  id: number
  name: string
  token: string
}
// 接收/login返回数据类型
export interface IDataType<T = any> {
  code: number
  data: T
}
