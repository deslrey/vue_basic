// 该文件由于创建Vuex中最为核心的 store
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 求和相关的配置
const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            console.log('mutations 中的 JIA 被调用了')
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations 中的 JIAN 被调用了')
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}

// 人员相关的配置
const personOptions = {
    namespaced: true,
    actions: {

    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations 中的 ADD_PERSON 被调用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {

    },
}
// 创建并暴露 state
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})