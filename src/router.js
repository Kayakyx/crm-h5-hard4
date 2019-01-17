import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      // name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Main.vue'),

      children: [
          {
              path: '/',
              redirect: 'work'
          },
          {
            path: 'work',
            name: 'Work',
            component: () => import('./views/Work.vue'),
          },
          {
            path: 'data',
            name: 'Data',
            component: () => import('./views/Data.vue'),
          },
          {
            path: 'remind',
            name: 'Remind',
            component: () => import('./views/Remind.vue'),
          },
          {
            path: 'more',
            name: 'More',
            component: () => import('./views/More.vue'),
          }
      ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Login.vue'),
    },
   {    //处理没网
        path: '/notnetwork',
        name: 'NotNetwork',
        component: () => import('./views/NotNetwork.vue'),
    },
   {
        path: '/testpage',
        name: 'TestPage',
        component: () => import('./views/TestPage.vue'),
    },
    //处理错误路由
    {path: '*', name: '', component: () => import('./views/Error.vue')}
  ]
});
//全局拦截
router.beforeEach( (to, from, next)=>{
    // console.log(to,from);
    //模拟
    let isLogin = JSON.parse(sessionStorage.getItem('isLogin'));
    if(isLogin || to.path === '/login'){ //已登录或直接去登录页
        next();//放行
    }else{
        //跳转/login,并把用户原本访问的路由传过去
        router.push({path: '/login', query: {redirect: to.path} });
    }

} );

export default router;

