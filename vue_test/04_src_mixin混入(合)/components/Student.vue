<template>
    <div>
        <h2 @click="showName">学生姓名 : {{ name }}</h2>
        <h2>学生性别 : {{ sex }}</h2>
    </div>
</template>

<script>
//  引入混合
// import { mixin, hunhe2 } from '../js/minin'

export default {
    name: 'Student',
    data() {
        return {
            name: "张三",
            sex: '男'
        }
    },
    // mixins: [mixin, hunhe2],
}
</script>