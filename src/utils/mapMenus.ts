import { RouteRecordRaw } from "vue-router"
// 匹配路由表并动态添加
export function mapmenusToRoutes(usermenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1.加载所有routes
  const allRoutes: RouteRecordRaw[] = []
  // 2.递归查找所有文件
  const routFiles = require.context("../router/main", true, /\.ts/)
  // 3.获取所有文件路径并匹配路由对象
  routFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })
  const recuseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        recuseGetRoute(menu.children)
      }
    }
  }
  recuseGetRoute(usermenus)
  return routes
}
// 路径匹配菜单
export function pathMapMenu(
  userMenus: any[],
  currentPath: string,
  attr: string
): any {
  for (const key in userMenus) {
    if (userMenus[key].type === 2) {
      if (userMenus[key].url === currentPath) {
        return userMenus[key][attr]
      }
    } else {
      const value = pathMapMenu(
        userMenus[key].children || [],
        currentPath,
        attr
      )
      if (value) {
        return value
      }
    }
  }
}
// 通过meau映射权限
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []
  const deepChildren = (userMenus: any) => {
    for (const key in userMenus) {
      if (userMenus[key].type === 3) {
        permissions.push(userMenus[key].permission)
      } else {
        deepChildren(userMenus[key].children)
      }
    }
  }
  deepChildren(userMenus)
  return permissions
}
