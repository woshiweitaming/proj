import { createRouter, createWebHashHistory } from 'vue-router'
import routesConfig from '@/config/routes_config'

const routes = routesConfig

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//路由判断
router.beforeEach(async (to, from, next) => {
  const token = ''
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
