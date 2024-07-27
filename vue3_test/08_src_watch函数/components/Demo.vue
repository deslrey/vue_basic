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
    <button @click="person.job.j1.srlary++">涨薪</button>
</template>

<script>

import { reactive, ref, watch } from 'vue'

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

        //  情况一：监视ref所定义的一个响应式数据
        // watch(sum, (newValue, oldValue) => {
        //     console.log('sum变化了', newValue, oldValue);
        // }, { immediate: true })

        // 情况二：监视ref所定义的多个响应式数据
        // watch([sum, msg], (newValue, oldValue) => {
        //     console.log('sum/msg变化了', newValue, oldValue);
        // }, { immediate: true })

        //  情况三：监视reactive所定义的一个响应式数据,
        // 1.注意: 此处无法正确的获取 oldValue
        // 2..注意: 强制开启了深度监视 (deep配置无效)
        // watch(person, (newValue, oldValue) => {
        //     console.log('person变化了', newValue, oldValue);
        // }, { deep: false })

        // 情况四：监视reactive所定义的一个响应式数据中的某个属性
        // watch(() => person.age, (newValue, oldValue) => {
        //     console.log('age变化了', newValue, oldValue);
        // })

        // 情况五：监视reactive所定义的一个响应式数据中的某个些属性
        // watch([() => person.age, () => person.name], (newValue, oldValue) => {
        //     console.log('age/name变化了', newValue, oldValue);
        // })

        // 特殊情况
        watch(() => person.job, (newValue, oldValue) => {
            console.log('job变化了', newValue, oldValue);
        }, { deep: true })  //  此处由于监视的是reactive所定义的对象中的某个属性,使用deep配置音效



        return {
            sum,
            msg,
            person
        }
    }
}
</script>