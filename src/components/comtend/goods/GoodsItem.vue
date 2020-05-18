<template>

    <div class="goods-item">
        <img :src="goodsItem.show.img" alt="">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <p><span>{{goodsItem.price}}</span>——<span>{{goodsItem.cfav}}</span></p>
        </div>
    </div>
  

</template>
<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style scoped>

    .goods-item{
        display: flex;
        flex-direction: column;
        width:47%;
        padding-bottom:.1rem;
    }
    .goods-item img{
        width:100%;
        border-radius:.05rem; 
    }  
    .goods-info p{
        width:1.4rem;
        font-size:.12rem;
        text-align: center;
        margin-left:.02rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>