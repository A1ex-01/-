import { createStore, Store, useStore as useVuexSotre } from "vuex"
import { IRootState, IStoreType } from "./types"
import login from "./login/login"
const store = createStore<IRootState>({
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch("login/initLocalInfo")
}
export function useStore(): Store<IStoreType> {
  return useVuexSotre()
}
export default store
