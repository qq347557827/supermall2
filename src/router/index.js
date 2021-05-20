import Vue from 'vue'
import VueRouter from 'vue-router'

// import Detail from '../views/detail/Detail';


const Home = () => import('@/views/home/Home')
const Sort = () => import('@/views/sort/Sort')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const Detail = () => import('@/views/detail/Detail')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    name: 'Sort',
    path: '/sort',
    component: Sort
  },
  {
    name: 'Cart',
    path: '/cart',
    component: Cart
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile
  },
  {
    name: 'Detail',
    path: '/detail/:iid',
    component: Detail
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
