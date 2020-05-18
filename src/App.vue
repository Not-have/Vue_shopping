<template>
  <div class="box">
    <div class="botBar">
      <router-link to="/home">首页</router-link>
      <router-link to="/sort">分类</router-link>
      <router-link to="/shopping">购物车</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
   <!-- 路由对应组件的显示 -->
   <keep-alive>
    <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
// import {request} from '@/api/request';

export default {
  name: 'App',
  // 这个是组件的调用
  components: {

  },
  created() {
    // request({
    //   url:'/home/multidata'
    // }).then(res=>{
    //   console.log(res);
    // }).catch(err=>{
    //   console.log(err);
    // })
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size:.16rem;
  height: 100%;
  background: #f9f9f9;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
}
em,i{
  font-style: normal;
}
input{
  outline:none;
}

/* 导航的样式 */
.router-link-exact-active{
  color:plum;
}

.botBar{
  position:fixed;
  bottom:-5px;
  /* display: block; */
  z-index:2;
  background:#efe9e9;
  width:100%;
  height:.6rem;
  display: flex;
  justify-content:space-around;
  align-items: center;
  
}
</style>
