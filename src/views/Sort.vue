<template>
<!-- 使用的时候，要在外层给一个包裹，确定一个高度，里面并且只能有一个元素 -->
  <div class="wrapper" ref="wrappers">
    <div class="content">

    
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
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
       pullUpLoad: true
    })
    this.scroll.on('scroll',(position)=>{
      // 打印滚动事件
      console.log(position);
    })
    this.scroll.on('pullingUp',()=>{
      // 到底部的时候，就会触发它
      console.log('上拉加载更多');
    })
  },
}
</script>

<style scoped>
  .wrapper{
    height:3rem;
    background-color:red;
    overflow: hidden;
    /* overflow-y: scroll; */
  }
</style>