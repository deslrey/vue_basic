<template>
    <h1>当前的求和是: {{ sum }}</h1>
    <button @click="sum++">点我y++</button>
    <hr />
    <h1>姓名 : {{ name }}</h1>
    <h1>年龄 : {{ age }}</h1>
    <h1>薪水 : {{ job.j1.salary }}</h1>
    <button @click="name += '~'">点我修改姓名</button>
    <button @click="age++">点我增加年龄</button>
    <button @click="job.j1.salary++">涨薪 </button>
</template>

<script>

import { reactive, ref, readonly, shallowReadonly, toRefs } from 'vue'

export default {
    name: 'Demo',
    setup() {

        let sum = ref(0)
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        // person = readonly(person)
        // person = shallowReadonly(person)
        // sum = readonly(sum)
        // sum = shallowReadonly(sum)



        return {
            sum,
            ...toRefs(person)
        }
    }
}
</script>