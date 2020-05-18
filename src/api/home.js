// 在这里写首页的请求数据，是因为方便以后的管理
import {request} from '@/api/request';
// 在这里获取首页的数据
export function homeObtain(){/*如果这里使用的是export，那么在取homeObtain的时候，要 加花括号；不加花括号是export default*/
    return request({
        url:'/home/multidata'
    })

}


//获取首页相关商品的数据
export function getHomeGoods(type,page){
    return request({
        url:'home/data',
        // 在这里向后台发送数据
        params:{
            type,
            page
        }
    })
}