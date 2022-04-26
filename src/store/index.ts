import { createStore, Store, useStore as useVuexSotre } from "vuex"
import { IRootState, IStoreType } from "./types"
import login from "./login/login"
import dashBorderModule from "./views/view"
const store = createStore<IRootState>({
  modules: {
    login,
    dashBorderModule
  }
})
export function setupStore() {
  store.dispatch("login/initLocalInfo")
}
export function useStore(): Store<IStoreType> {
  return useVuexSotre()
}
export default store
