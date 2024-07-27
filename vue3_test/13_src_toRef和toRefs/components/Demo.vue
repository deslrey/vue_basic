<template>
    <h4>{{ person }}</h4>
    <h1>姓名 : {{ name }}</h1>
    <h1>年龄 : {{ age }}</h1>
    <h1>薪水 : {{ job.j1.salary }}</h1>
    <button @click="name += '~'">点我修改姓名</button>
    <button @click="age++">点我增加年龄</button>
    <button @click="job.j1.salary++">涨薪 </button>
</template>

<script>

import { reactive, toRef, toRefs } from 'vue'

export default {
    name: 'Demo',
    setup() {

        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        // const name1 = person.name
        // console.log('%%%', name1);

        // const name2 = toRef(person, 'name')
        // console.log('###', name2);

        const x = toRefs(person)
        console.log('******', x);

        return {
            person,
            // name: toRef(person, 'name'),
            // age: toRef(person, 'age'),
            // salary: toRef(person.job.j1, 'salary')
            ...toRefs(person)
        }
    }
}
</script>