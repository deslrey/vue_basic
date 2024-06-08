<template>
    <div>
        <h2> {{ massage }}</h2>
        <h2>学生姓名 : {{ name }}</h2>
        <h2>学生性别 : {{ sex }}</h2>
        <h2>学生年龄 : {{ myAge + 1 }}</h2>
        <button @click="updateAge">点我修改接收到的年龄</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            massage: "我是一个学生",
            myAge: this.age
        }
    },

    methods: {
        updateAge() {
            this.myAge++
        }
    },
    // props: ["name", "age", "sex"]   //简单声明接收、
    //  接收的同时对数据进行类型限制
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number
    // }
    //  接收的同时对数据 ： 进行类型限制 + 默认值的指定 + 必要性的限制
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 99
        },
        sex: {
            type: String,
            required: true
        }
    }
}
</script>