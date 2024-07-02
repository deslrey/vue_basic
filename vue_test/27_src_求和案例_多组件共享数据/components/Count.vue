<template>
    <div>
        <h1>当前求和为 : {{ sum }}</h1>
        <h3>当前求和放大10倍为 : {{ bigSum }}</h3>
        <h3>我在{{ school }} 学习 {{ subject }}</h3>
        <h3 style="color:rebeccapurple;">Person 组件的总人数为 {{ personList.length }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Count',
    data() {
        return {
            n: 1
        }
    },
    computed: {
        // 考程序员自己亲自去写的计算属性
        // sum() {
        //     return this.$store.state.sum
        // },

        // school() {
        //     return this.$store.state.school
        // },
        // subject() {
        //     return this.$store.state.subject
        // },
        // 借助 mapState 生成计算属性,从state 中读取数据。（对象写法）
        // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
        // 借助 mapState 生成计算属性,从state 中读取数据。（数组写法）
        ...mapState(['sum', 'school', 'subject', 'personList']),
        /************************************************************************************/
        // bigSum() {
        //     return this.$store.getters.bigSum
        // },
        // 借助 mapGetters 生成计算属性,getters 中读取数据。（对象写法）
        // ...mapGetters({bigSum:'bigSum'})
        // 借助 mapGetters 生成计算属性,getters 中读取数据。（数组写法）
        ...mapGetters(['bigSum'])

    },
    methods: {
        // 程序员自己写的方法
        // increment() {
        //     this.$store.commit('JIA', this.n)
        // },
        // decrement() {
        //     this.$store.commit('JIAN', this.n)
        // },
        // 借助 mapMutations 生成对应的方法,方法中会调用 commit 去联系 mutations （对象写法）
        ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),

        // 借助 mapMutations 生成对应的方法,方法中会调用 commit 去联系 mutations （数组写法）
        // ...mapMutations(['JIA','JIAN']),

        // incrementOdd() {
        //     this.$store.dispatch('jiaOdd', this.n)
        // },
        // incrementWait() {
        //     this.$store.dispatch('jiaWait', this.n)
        // },
        // 借助 mapActions 生成对应的方法,方法中会调用 dispatch 去联系 actions （对象写法）
        ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),

        // 借助 mapActions 生成对应的方法,方法中会调用 dispatch 去联系 actions （数组写法）
        // ...mapActions(['jiaOdd', 'jiaWait']),

    },
    mounted() {
        const x = mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' })
        console.log(x);
    }
}
</script>

<style lang="css">
botton {
    margin-left: 5px;
}
</style>
