import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/ui/Menu'
import Storage from '@/utils/Storage'
Vue.use(Router)

//默认配置路由
export const constantRoutes = Menu.menuDefaultRouter()
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router 