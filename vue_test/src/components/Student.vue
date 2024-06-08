<template>
    <div>
        <h2> {{ massage }}</h2>
        <h2>学生姓名 : {{ name }}</h2>
        <h2>学生性别 : {{ sex }}</h2>
        <h2>学生年龄 : {{ age + 1 }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            massage: "我是一个学生",
        }
    },
    // props: ["name", "age", "sex"]   //简单声明接收、
    //  接收的同时对数据进行类型限制
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number
    // }

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