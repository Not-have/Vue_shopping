<template>
    <div class="goods-item">
        <!-- 在这遍历一共有多少个Item ,在把item传递给样式组件-->
        <GoodsItem v-for="(item,index) in goodaSsembly" :key='index' :goodsItem="item"/>
    </div>
</template>
<script>
import GoodsItem from './GoodsItem';

export default {
    name:'GoodsList',
    data() {
        return {
            
        }
    },
    props:{
       goodaSsembly:{
           type:Array,
           default(){
               return []
           }
       } 
    },
    components:{
        GoodsItem
    },
    /*
    methods: {
        fun(){
            window.onscroll = ()=>{
                //变量scrollTop是滚动条滚动时，距离顶部的距离
                var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                //变量windowHeight是可视区的高度
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                //滚动条到底部的条件
                if(scrollTop+windowHeight == scrollHeight ){
                    //写需要执行的代码
                    // console.log('aaaa')
                    // 在这块把要加载的信息传出去
                    this.$emit('pulipageUp');
                    
                } 
            }
        }
    },*/
    watch: {
        
    },
    created() {
        // this.fun();

    },
}
</script>
<style scoped>
    .goods-item{
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;
    }
</style>