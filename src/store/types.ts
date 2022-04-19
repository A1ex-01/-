import { ILoginState } from "./login/types"
export interface IRootState {
  token: string
  userInfo: object
}
export interface IRootWithModule {
  login: ILoginState
}
export type IStoreType = IRootState & IRootWithModule
