// 该文件由于创建Vuex中最为核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'

Vue.use(Vuex)
// 准备actions - 用于响应组件中的动作
const actions = {
    // jia(context, value) {
    //     console.log('actions 中的 jia 被调用了')
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     console.log('actions 中的 jian 被调用了')
    //     context.commit('JIAN', value)
    // }
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            console.log('actions 中的 jiaOdd 被调用了')
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            console.log('actions 中的 jiaWait 被调用了')
            context.commit('JIA', value)
        }, 500)
    }
}
// 准备mutations - 用于操作数据（state）
const mutations = {
    JIA(state, value) {
        console.log('mutations 中的 JIA 被调用了')
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations 中的 JIAN 被调用了')
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('mutations 中的 ADD_PERSON 被调用了')
        state.personList.unshift(value)
    }
}
// 准备state - 用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
    personList: [
        { id: '001', name: '张三' }
    ]
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露 state
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})