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

import { reactive, ref, watch } from 'vue'

export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let msg = ref('你好啊')

        let person = ref({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    srlary: 20
                }
            }
        })

        console.log(person);

        watch(sum, (newValue, oldValue) => {
            console.log('sum的值变化了', newValue, oldValue);
        })

        watch(person, (newValue, oldValue) => {
            console.log('person的值变化了', newValue, oldValue);
        }, { deep: true })

        return {
            sum,
            msg,
            person
        }
    }
}
</script>