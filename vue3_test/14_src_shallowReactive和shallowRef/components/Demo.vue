<template>
    <h1>x.y的值是: {{ x.y }}</h1>
    <button @click="x={ y:999 }">点我替换</button>
    <button @click="x.y++">点我y++</button>
    <hr />
    <h4>{{ person }}</h4>
    <h1>姓名 : {{ name }}</h1>
    <h1>年龄 : {{ age }}</h1>
    <h1>薪水 : {{ job.j1.salary }}</h1>
    <button @click="name += '~'">点我修改姓名</button>
    <button @click="age++">点我增加年龄</button>
    <button @click="job.j1.salary++">涨薪 </button>
</template>

<script>

import { reactive, ref, toRefs, shallowReactive, shallowRef } from 'vue'

export default {
    name: 'Demo',
    setup() {

        // let person = shallowReactive({       //  只考虑第一层数据的响应式
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        let x = shallowRef({
            y: 0
        })

        console.log('******', x);

        return {
            x,
            person,
            ...toRefs(person)
        }
    }
}
</script>