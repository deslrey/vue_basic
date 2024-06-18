<template>
    <div class="school">
        <h2>学校名称 : {{ name }}</h2>
        <h2>学校地址 : {{ address }}</h2>
        <button @click="sendSchoolName">点我发送</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
        return {
            name: "尚硅谷",
            address: '武汉'
        }
    },
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>