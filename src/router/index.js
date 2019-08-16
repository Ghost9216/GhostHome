import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home"
import Login from "@/components/Login";
import Aboutme from  '@/components/AboutMe/AEmain'
import Course from  '@/components/course/course'
import Markdown from '@/components/Tools/Markdown'
import MapApi from  '@/components/Tools/MapApi'
import Rmain from '@/components/resource/Rmain'
import ArticleList from  "@/components/ArticleList/Published"
import  NotFound from  "@/components/404"
import  Demo from  "@/components/demo/demo"
import  Demo1 from  "@/components/demo/demo1"
import  Demo2 from  "@/components/demo/demo2"
import  Demo3 from  "@/components/demo/demo3"
import  Demo4 from  "@/components/demo/demo4"
import  Demo5 from  "@/components/demo/demo5"
import  Demo7 from  "@/components/demo/demo7"
import  Demo6 from  "@/components/demo/demo6"
import  MainSlide from "@/components/slide/mainslide"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,

    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: Aboutme
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: Markdown
    },
    {
      path: '/map',
      name: 'mapapi',
      component: MapApi
    },
    {
      path: '/rmain',
      name: 'rmain',
      component: Rmain
    },
    {
      path: '/published',
      name: 'published',
      component: ArticleList
    },
    {
      path:"*",
      name:"*",
      component:NotFound
    },
    // 路由嵌套
    {

      path:"/demo",
      component: Demo,
      children:[
        {
          path: '',
          component: Demo

        },
        {
          path:"demo1",
          component:Demo1,
          children:[
            {
              path:'demo2',
              component:Demo2
            },
            {
              path:'demo3',
              component:Demo3
            }
          ]

        },



      ]

    },
    {
      path:'/demo4',
      name: 'demo4',
      component:Demo4
    },{
    path:'/demo5',
      name:'demo5',
      component:Demo5
    },
    {
      path:'/demo6',
      name:'/demo6',
      component:Demo6,
      children:[{
        path:'demo7',
        name:'dmmo7',
        component:Demo7

      }]
    },{
      path:'/mainslide',
      name:'mainslide',
      component: MainSlide

    }
  ],
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  console.log("导航守卫")


if(to.path=="/"){
  next()

}
else if(localStorage.tanken) {
  next()
}
else {
  alert("请登录");
  next("/")
}

})



export default router;
