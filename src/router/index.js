//引包
import Vue from 'vue'
import Router from 'vue-router'

//引入下面创建的页面
// 首页
const Home =( )=>import('@/views/Home.vue');
// 分类页
const Sort =( )=>import('@/views/Sort.vue');
// 购物车
const Shopping =( )=>import('@/views/Shopping.vue');
// 我的
const Mine =( )=>import('@/views/Mine.vue');

//在vue中使用路由
Vue.use(Router);
export default new Router({
    routes: [
        {name:"home",path:"/home",component:Home},
        {name:"sort",path:"/sort",component:Sort},
        {name:"shopping",path:"/shopping",component:Shopping},
        {name:"mine",path:"/mine",component:Mine}
        //重定向
        // {path:"/*",redirect:"/地址"},

    ]
})
