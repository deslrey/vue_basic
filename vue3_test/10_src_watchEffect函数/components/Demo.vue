<template>
    <h1>当前求和为: {{ sum }}</h1>
    <button @click="sum++">点我++</button>
    <hr />
    <h1>{{ msg }}</h1>
    <button @click="msg += '!'">点我修改</button>
    <hr />
    <h1>姓名 : {{ person.name }}</h1>
    <h1>年龄 : {{ person.age }}</h1>
    <h1>薪水 : {{ person.job.j1.srlary }}</h1>
    <button @click="person.name += '~'">点我修改姓名</button>
    <button @click="person.age++">点我增加年龄</button>
    <button @click="person.job.j1.srlary++">涨薪 </button>
</template>

<script>

import { reactive, ref, watch, watchEffect } from 'vue'

export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let msg = ref('你好啊')

        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    srlary: 20
                }
            }
        })

        // watch(sum, (newValue, oldValue) => {
        //     console.log('sum的值变化了', newValue, oldValue);
        // }, { immediate: true })

        watchEffect(() => {
            const x1 = sum.value
            const x2 = person.job.j1.srlary
            console.log('watchEffect所指定的回调执行了');
        })

        return {
            sum,
            msg,
            person
        }
    }
}
</script>