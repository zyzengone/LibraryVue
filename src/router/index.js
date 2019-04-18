import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Posts from "../components/Categories";
import Books from '../components/Books'
import Login from "../components/Login";
import Users from "../components/Users";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name:'login',
      component:Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {path:'/users',component:Users,name:'users'}
      ]
    },

    {
      path:'/',
      name:'Home',
      component:Home,
      children:[
        {path:'/posts',component:Posts,name:'posts'}
      ]
    },
    {
      path:'/category/:id',
      name:'book',
      component:Books
    }
  ],
  mode:'hash'
})
