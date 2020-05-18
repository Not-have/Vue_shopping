
/*
// 引入
import axios from 'axios';
// 对其进行暴露(让其在外面传入；  success，failure他俩都是参数    success是一个函数，failure他也是一个函数   然后都可以回调出去   )
export function request(config,success, failure){
    // 1、创建实例，不要创建全局的
    const instance = axios.create({
        baseURL:"http://123.207.32.32:8000/api/h8",
        timeout:5000//这个是5秒的意思
    })


    // 发送网络请求( res 这个是一个参数的时候，不用加括号，是俩参数的时候，记得加一个圆括号)
    instance(config)
    .then(res=>{
        // console.log(res);
        // 在这块给它回调出去
        success(res);
    })
    .catch(err=>{
        // console.log(err)
        // 回调出去
        failure(err);
    })
} 


*/

/*
//引入
import axios from 'axios';
// 对其进行暴露(让其在外面传入；  success，failure他俩都是参数    success是一个函数，failure他也是一个函数   然后都可以回调出去   )
export function request(config){
    // 1、创建实例，不要创建全局的
    const instance = axios.create({
        baseURL:"http://123.207.32.32:8000/api/h8",
        timeout:5000//这个是5秒的意思
    })
    // 2、axios拦截器,它分为全局拦截（axios.interceptors）和实例拦截，下面我们使用实例拦截
    // 2-1、这样写代表拦截请求(里面有两个参数)
    instance.interceptors.request.use(config=>{
        // 这里拦截是成功的（这里至少是发送成功的）,所以在拦截之后，要return出去，要不然外面收不到
        // console.log(config);
        // 请求拦截做的一些事情：1）比如它不符合服务器的要求的时候，在这里拦截掉；2）在这里进行一些数据的过滤；3）比如在页面发送请求的时候，在页面显示一个图标，在请求成功的时候，消失掉；4）某些 网络的请求（比如登录的token），必须携带一些特殊的信息时，就比如在发送某些必须登录之后，才能发送的求情时，可以在这判断，在没登录的时候，让其登录之后，才可以发送某些请求
        return config;
    },err=>{//这块很少来到，因为是发送失败的(数据很少发送失败)
        console.log(err);
    });
    // 2-2、拦截响应(这里也要传入两个参数)，所以是结果
    instance.interceptors.response.use(res=>{
        // 服务器已经响应了,服务器返回的真正结果
        // console.log(res);
        // 在这返回结果，因为在别的地方要使用，如果这块不返回，在别的地方 就没办法使用
        return res.data;
    },err=>{
        console.log(err);
    });
    // 3、发送网络请求
    return instance(config)
} 

*/


import axios from 'axios';
export function request(config){
    return new Promise((resolve,reject)=>{
        // 1、创建实例，不要创建全局的
        const instance = axios.create({
            baseURL:"http://127.0.0.1:8888/api/private/v1",
            timeout:5000//这个是5秒的意思
        })


        // 发送网络请求( res 这个是一个参数的时候，不用加括号，是俩参数的时候，记得加一个圆括号)
        instance(config)
        .then(res=>{
            resolve(res);
        })
        .catch(err=>{
            reject(err);
        })
    })
}