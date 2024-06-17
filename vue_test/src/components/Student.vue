<template>
    <div class="student">
        <h2>学生姓名 : {{ name }}</h2>
        <h2>学生性别 : {{ sex }}</h2>
        <button @click="sendStudentName">点我发送</button>
    </div>
</template>
<script>

export default {
    name: 'Student',

    data() {
        return {
            name: "张三",
            sex: '男'
        }
    },
    methods: {
        sendStudentName() {
            this.$emit('atguigu', this.name)
        }
    }
}
</script>

<style lang="less" scoped>
.student {
    background-color: greenyellow;
    padding: 5px;
    margin-top: 30px;
}
</style>