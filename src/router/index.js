import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue';
import Addblog from '../views/Addblog.vue';
import Loginnest from "../views/Loginnest";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component:Blogs
  },
  {
    path: '/login',
    name: 'Loginnest',
    component:Loginnest,
    children:[
      {
        path:'/',
        name:Login,
        component:Login
      },
      {
        path:'/addblog',
        name:'Addblog',
        component:Addblog,
        meta:{
          requiresAuth:true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
