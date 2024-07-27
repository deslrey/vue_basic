<template>
    <h1>一个人的身份信息</h1>
    <h1>姓名: {{ person.name }}</h1>
    <h1>年龄: {{ person.age }}</h1>
    <button @click="test">测试一下APP组件的hello事件</button>
</template>

<script>

import { reactive } from 'vue'

export default {
    name: 'Demo',

    props: ['msg', 'school'],
    emits: ['hello'],

    setup(props, context) {

        // console.log('setup ------> ', props);
        console.log('setup ------> ', context);
        // console.log('setup ------> ', context.attrs);       //  相当于与 vue2 中的 $attrs
        console.log('setup ------> ', context.emit);       //  触发自定义事件
        console.log('setup ------> ', context.slots);       //  插槽

        let person = reactive({
            name: '张三',
            age: 18
        })

        function test() {
            context.emit('hello', 666)
        }

        return {
            person,
            test
        }
    }
}
</script>