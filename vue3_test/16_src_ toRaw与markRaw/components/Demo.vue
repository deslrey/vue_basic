<template>
    <h1>当前的求和是: {{ sum }}</h1>
    <button @click="sum++">点我y++</button>
    <hr />
    <h1>姓名 : {{ name }}</h1>
    <h1>年龄 : {{ age }}</h1>
    <h1>薪水 : {{ job.j1.salary }}</h1>
    <h1 v-show="person.car">座驾信息 : {{ person.car }}</h1>
    <button @click="name += '~'">点我修改姓名</button>
    <button @click="age++">点我增加年龄</button>
    <button @click="job.j1.salary++">涨薪 </button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">点我添加一台车</button>
    <button @click="person.car.name += '!'">点我修改车名</button>
    <button @click="person.car.price++">点我修改价格</button>
</template>

<script>

import { reactive, ref, toRefs, toRaw, markRaw } from 'vue'

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

        function showRawPerson() {
            const p = toRaw(person)
            p.age++
            console.log(p);
        }

        function addCar() {
            let car = { name: '小米su7', price: 20 }
            person.car = markRaw(car)
        }

        return {
            sum,
            person,
            showRawPerson,
            addCar,
            ...toRefs(person)
        }
    }
}
</script>