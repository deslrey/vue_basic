<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName" />
        <hr />
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用 @ 或 v-on) -->
        <!-- <Student v-on:atguigu="getStudentName" /> -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用 ref) -->
        <Student ref="student" />
    </div>
</template>

<script>

import School from './components/School';
import Student from './components/Student';

export default {
    name: 'App',
    components: { School, Student },
    data() {
        return {
            msg: '你好啊'
        }
    },
    methods: {
        getSchoolName(name) {
            console.log('SchoolName = ', name);
        },
        getStudentName(name) {
            console.log('StudentName = ', name);
        }
    },
    mounted() {
        // this.$refs.student.$on('atguigu', this.getStudentName)
        this.$refs.student.$once('atguigu', this.getStudentName)
    }
}
</script>

<style>
.app {
    background-color: gray;
    padding: 5px;
}
</style>