import { getUserList } from "@/service/user/user"
import { getRoleList } from "@/service/role/role"
import { getGoodList } from "./goods/goods"
const allMatch: any = {
  user: { getDataList: getUserList },
  role: { getDataList: getRoleList },
  good: { getDataList: getGoodList }
}
export { allMatch }
