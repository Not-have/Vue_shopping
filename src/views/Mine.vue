<template>
    <div>
        111
        {{showData}}
    </div>
</template>
<script>
import {formatDate} from '@/utils/Time.js'
export default {
    data() {
        return {
            // 这个是后端给的时间戳
            time:1535694719
        }
    },
    computed:{
        showData(){
            // 将事件戳转为对象
            const date = new Date(this.time*1000);
            //将data进行格式化
            return formatDate(date,'yyyy-MM-dd hh:mm:ss');//这个h也有可能是大写
        }

    },
}
</script>
<style scoped>

</style>