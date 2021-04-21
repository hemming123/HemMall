import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装vuerouter插件
Vue.use(VueRouter)

//2.配置路由信息
const routes = [
  {
    path: '/home',
    component: null
  }, 
  {
    path: '/category',
    component: null,
  },
   {
    path: '/cart',
    component: null
  }, 
  {
    path: '/profile',
    component: null
  }
]

//3.创建路由对象
const router = {
  model: "history",
  routes
}

//4.导出router
export default router