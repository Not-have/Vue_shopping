import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export let store=new Vuex.Store({
    state:{
        arr:[
            {name:'love',age:22},
            {name:'hahahah',age:22},
            {name:'pppp',age:55},
            {name:'哈哈哈',age:56}
        ]
    },
    getters:{
        daxie(state){
            return state.arr[0].name.toLocaleUpperCase();
        },
        //小于5岁
        xiaoyu(state){
            let newarr=state.arr.filter((v)=>{
                if(v.age<50){
                    return v;
                }
            })
            return newarr;
        }
    },
    mutations:{
        updata(state){
            state.arr[0].name='啪啪啪'
        },
        updataTwo(state,padload){
            state.arr.forEach((v)=>{
                v.age+=padload;
            })
        },
        actiosResive(state){
            state.arr[0].name='永远永远'
        },
        actiosResiveTwo(state,padload){
            state.arr.forEach((v)=>{
                v.age+=padload;
            })
        }
    },
    actions:{
        acta(context){
            context.commit('actiosResive')
        },
        actaTwo(context,padload){
            context.commit('actiosResiveTwo',padload)
        }
    }
})