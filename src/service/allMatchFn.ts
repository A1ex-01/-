import {
  getUsersList,
  deleteUsersInfo,
  createUsersInfo,
  editUsersInfo
} from "@/service/user/user"
import {
  getRoleList,
  deleteRoleInfo,
  createRoleInfo,
  editRoleInfo
} from "@/service/role/role"
import {
  getGoodList,
  deleteGoodsInfo,
  CreateGoodsInfo,
  editGoodsInfo
} from "./goods/goods"
import {
  getMenuList,
  deleteMenuInfo,
  createMenuInfo,
  ediMenuInfo
} from "./menu/menu"
import {
  getDepartList,
  deleteDepartInfo,
  CreateDepartInfo,
  editDepartInfo
} from "./depart/depart"
import {
  getCategoryList,
  deleteCategoryInfo,
  CreateCategoryInfo,
  editCategoryInfo
} from "./category/category"
const allMatch: any = {
  users: {
    getDataList: getUsersList,
    deleteDataInfo: deleteUsersInfo,
    createDataInfo: createUsersInfo,
    editDataInfo: editUsersInfo
  },
  role: {
    getDataList: getRoleList,
    deleteDataInfo: deleteRoleInfo,
    createDataInfo: createRoleInfo,
    editDataInfo: editRoleInfo
  },
  goods: {
    getDataList: getGoodList,
    deleteDataInfo: deleteGoodsInfo,
    createDataInfo: CreateGoodsInfo,
    editDataInfo: editGoodsInfo
  },
  menu: {
    getDataList: getMenuList,
    deleteDataInfo: deleteMenuInfo,
    createDataInfo: createMenuInfo,
    editDataInfo: ediMenuInfo
  },
  department: {
    getDataList: getDepartList,
    deleteDataInfo: deleteDepartInfo,
    createDataInfo: CreateDepartInfo,
    editDataInfo: editDepartInfo
  },
  category: {
    getDataList: getCategoryList,
    deleteDataInfo: deleteCategoryInfo,
    createDataInfo: CreateCategoryInfo,
    editDataInfo: editCategoryInfo
  }
}
export { allMatch }
