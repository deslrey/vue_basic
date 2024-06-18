<template>
    <div class="student">
        <h2>学生姓名 : {{ name }}</h2>
        <h2>学生性别 : {{ sex }}</h2>
        <button @click="sendStudentName">点我发送</button>
        <button @click="unbind">点我解除绑定atguigu事件</button>
        <button @click="death">销毁当前 Student 组件的实例(vc)</button>
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
            this.$emit('getStudentName', this.name)
            // this.$emit('demo')
        },
        unbind() {
            this.$off('getStudentName')    //解绑一个事件
            // this.$off(['getStudentName', 'demo'])    //解绑多个事件
            // this.$off()    //解绑全部事件
        },
        death() {
            this.$destroy
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