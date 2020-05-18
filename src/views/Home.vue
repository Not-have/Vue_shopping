<template>
    <div class="home-box" ref="keshi">
        <div class="home_title">
            <p>购物街</p>
        </div>
        <!-- <h1>首页</h1> -->
        <!-- 下面这个轮播图，给他封装起来,然后再把请求过来的数据，发送给子组件 -->
        
<!-- 需要给下面内容一个固定的宽度 -->
    <Scroll class="ppppp">
        <HomeSwiper :banners="banner" />
        <HomeTwoList :recommends='recommend' />
        <Popular />
        <Tabs :tab="['流行','新款','精选']" @tabFun="tabfun" 
        class="lalalalala"/>

        <GoodList :goodaSsembly="goods[currentType].list" />
    </Scroll>  
        <div class="bottom_home"></div>
    </div>
</template>
<script>
// 在这调用组件
import HomeSwiper from './home/HomeSwiper';
import Tabs from '@/components/common/tabs/Tabs';
import GoodList from '@/components/comtend/goods/GoodsList';

import HomeTwoList from './home/HomeTwoList';
import Popular from './home/Popular';

import Scroll from '../components/common/BScroll/Scroll'

// 1、在首页里，我们只需要面向home.js去发送网络请求，所以在这杨引用
import {homeObtain,getHomeGoods} from '../api/home';
export default {
    data() {
        return {
            // result:null
            banner:[],
            recommend:[],
            goods:{//page 是当前页数，list是数据
            // 默认只请求第一页的数据
                // 流行
                'pop':{page:0,list:[]},
                // 新款
                'new':{page:0,list:[]},
                // 精选
                'sell':{page:0,list:[]}
            },
            // 给这快写一个默认数据类型
            currentType:'pop'
        }
    },
    components:{
        HomeSwiper,
        HomeTwoList,
        Popular,
        Tabs,
        GoodList,
        

        Scroll

    },
    // 2、在页面加载完成之后，组件立即调用
    created() {
        // 在这加一个小括号，调用数据(在这调用这个函数，然后这个函数就执行，它就会去请求数据)
        this.homeObtain();
        // 请求商品的数据(在这块调用的时候，传入参数)
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
        // let _top = null;
        // window.onscroll = function(){
        //     //兼容问题  获取滚动条移动的垂直距离
        //     _top = document.body.scrollTop || document.documentElement.scrollTop;
        //     console.log(_top);
        // }
        

    },
    // 在这写一个计算属性，否侧上面的那个就太长了
    // computed: {

    // },
    
    // 在方法里面 才是具体要做的事情
    methods: {
        /*
        *下面是事件监听
        */
        tabfun(index){
            // 更具这块传过来的数据，去取到数据
            console.log(index);
            
            switch(index){
                case 0:
                    this.currentType = 'pop';
                    break;
                case 1:
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
                    break;//最后一个写不写break都行
            }
        },
        /*
        *下面是网络请求
        */
        homeObtain(){
            homeObtain().then(res=>{
                // 3、拿到数据之后，保存到data里（因为一个数据在函数里，他是局部变量，所以当函数执行完之后，这个数据就不存在了）   
                /*注：1、函数里面的所有东西都是局部变量，当这个函数执行完，所有变量都会被内存回收掉
                2、函数调用 ——》他是压入到函数栈中的（保存函数嗲用过程中的所有变量）
                3、函数调用结束——》他会弹出函数栈（弹出之后，他会释放所有变量，所有变量就会垃圾回收掉；如果你在调用一次，南无它就会 重新创建这些变量，函数调用结束，它又会消失）
                */ 
                // console.log(res);
                // this.result=res;
                // console.log(res.data.data.banner.list);
                this.banner=res.data.data.banner.list;
                // console.log(res.data.data.recommend.list);
                this.recommend=res.data.data.recommend.list;
            })
        },
        getHomeGoods(type){
            // 页数要动态获取
            const page=this.goods[type].page + 1;
            getHomeGoods(type,page).then(res=>{
                console.log(res);
                // console.log(res.data.data.list);
                // 在这插入数据的时候，要注意，要一直叠加的，而不是直接赋值
                this.goods[type].list.push(...res.data.data.list);
                // 在这块要给页码加1
                // this.goods[type].page += 1; 
                // 
                
            })
        },
        /*
        LoadMore(){
            console.log('上拉加载更多');
            this.getHomeGoods(this.currentType);
        }*/
    },
}
</script>
<style scoped>
    .home_title{
        background: palevioletred;
        width:100%;
        height:.44rem;
        line-height:.44rem;
        text-align: center;
        position:fixed;
        top:0;
        z-index:33;
    }
    .home-box{
        /* overflow-y:scroll; */
        padding-top:.4rem;
    }
    .bottom_home{
        height:.5rem;
    }
    /* 设置一个可滚动高度 */
    .ppppp{
        height:4rem;
        overflow: hidden;
  
    }

</style>