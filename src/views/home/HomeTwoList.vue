<template>
    <div class="recommends">
        <div v-for="(item,index) in recommends" :key='index' class="recommends_one">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeTwoList',
    props:{
        // 在这就收数据
        recommends:{
            type:Array,
            default(){
                return [];
            }
        }
    },


}
</script>

<style scoped>
    .recommends{
        display:flex;
        justify-content:space-between;
        width:100%;
        /* overflow: hidden; */
        background: white;
        padding:.1rem 0 .1rem 0;
        border-bottom:.06rem solid gainsboro;
    }
    .recommends_one{
        /* flex:1; */
    }
    .recommends_one img{
        width:.6rem;
        height:.6rem;
    }
    .recommends_one p{
        font-size:.12rem;
        text-align: center;
    }
</style>