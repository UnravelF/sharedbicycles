let firstMenu = null

export function mapMenusToRoutes(userMenus) {
  const routes = []

  // 1. 加载所有默认路由
  const allRoutes = []
  const routeFiles = require.context('../router/main', true, /\.js/)
  routeFiles.keys().forEach((key) => {
    // ./operate/bicycle/bicycle.js
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2. 根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.menuUrl)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

// 通过路径查找动态菜单
export function pathMapToMenu(userMenus, currentPath, breadcrumbs = null) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        if (breadcrumbs) {
          breadcrumbs.push({ name: menu.name })
          breadcrumbs.push({ name: findMenu.name })
        }
        return findMenu
      }
    } else if (menu.type === 2 && menu.menuUrl === currentPath) {
      return menu
    }
  }
}

// 通过路径查找面包屑
export function pathMapToBreadcrumbs(userMenus, currentPath) {
  const breadcrumbs = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export { firstMenu }
