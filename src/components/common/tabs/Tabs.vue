<template>
    <div class="tab_control">
        <div v-for="(item,index) in tab" :key="index" class="tab_control_item"
        :class="{active: index===currentIndex }"
        @click="fun(index)"
        >
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'Tabs',
    // 在这接收从父传过来的数据，即tab的内容
    props:{
        tab:{
            type:Array,
            default(){
                return []
            }
        }
    },
    // 在data里记录一下，选中的状态
    data() {
        return {
            // 用它记录(为了给上面动态添加class名)
            currentIndex:0
        }
    },
    methods: {
        // 把上面的index拿到，然后传进来，再去改变currentIndex
        fun(num){
            this.currentIndex=num;
            // 把这个数据传到父元素
            this.$emit('tabFun',num);
        }
    },
}
</script>
<style scoped>
    .tab_control{

        display: flex;
        /* 设置样式 */
        font-size:.16rem;
        height:.4rem;
        line-height:.4rem;
        /* 让他滚动到一定程度，停止滚动，保持在那个位置 */



    }
    .tab_control_item{
        flex:1;
        text-align: center;
    }
    /* 这块添加选中时候的样式 */
    .active{
        color: pink;
    }
</style>