import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'; 
import {store} from "@/store/store";
import router from '@/router/index.js';
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')




// =====================================================================================================
/*

// 在这块调用这个函数
import {request} from '@/api/request';
request({
  url:'/home/multidata'
},res=>{
  console.log(res);
},err=>{
  console.log(err);
})

*/

/*
// 在这块调用这个函数
import {request} from '@/api/request';
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})

*/


