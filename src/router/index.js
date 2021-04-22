import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载,打包会单独生成
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')

//1.安装vuerouter插件
Vue.use(VueRouter)

//2.配置路由信息
const routes = [
  {
     path:'',
     redirect :'home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

//3.创建路由对象
const router = new VueRouter({
  model: "history",
  routes
})

//4.导出router
export default router