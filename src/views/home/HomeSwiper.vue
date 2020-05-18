<template>
    <div>
        <Swiper>
            <Swiper-item v-for="(item,index) in banners" :key="index">
                <!-- 因为轮播图可以添砖 -->
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </Swiper-item>
        </Swiper>
    </div>
</template>
<script>
// 这里写的原因是在index里已经给他暴露了
import {Swiper, SwiperItem} from '@/components/common/swiper/index';
export default {
    name:'HomeSwiper',
    // 在这接收父组件传递过来的数据
    props:{
        banners:{
            // 数据类型
            type:Array,
            // 在这给一个默认值(默认值  要是一个函数)，他是一个函数
            default(){
                return [] 
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>

</style>