<template>
<!-- 使用的时候，要在外层给一个包裹，确定一个高度，里面并且只能有一个元素 -->
  <div class="wrapper" ref="wrappers">
    <!-- 在这里使用一个插槽，在下面的这个里面，直接替换,但是里面必须是唯一元素 -->
    <div class="content">
        <!-- 插入的内容都在这个里面 -->
        <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
export default {
  data() {
    return {
      // 这里创建一个变量去保存它
      scroll:null
    }
  },
  mounted() {
    // console.log(BScroll);
    // 要传最外的面的这个
    this.scroll = new BScroll(this.$refs.wrappers,{
        // 实时监听,惯性也会监听
        probeType:3,
        // 下拉加载更多
        scrollY: true,
        pullUpLoad: true

    })
    this.scroll.on('scroll',()=>{
      // 打印滚动事件

    })
    this.scroll.on('pullingUp',()=>{
      // 到底部的时候，就会触发它
      console.log('上拉加载更多');
    })
  },
}
</script>

<style scoped>

</style>