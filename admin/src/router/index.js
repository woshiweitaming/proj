import Vue from 'vue'
import Router from 'vue-router'
import RouteMenuDatas from '@/datas/route_menu_datas'
import storage from '@/utils/storage'

Vue.use(Router)

//默认配置路由
export const constantRoutes = RouteMenuDatas
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

//路由判断
//路由判断
router.beforeEach(async (to, from, next) => {
  const token = storage.getLocalData('token')
  const title = to.meta.title
  document.title = title
  if (to.meta.requireAuth) { 
    if(token === null){
      next({
          path: '/login'
      })
    }else{
      next()
    }
  }else{
    next()
  }
})


export default router