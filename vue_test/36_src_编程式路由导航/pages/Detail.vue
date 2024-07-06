<template>
    <ul>
        <li>消息编号 : {{ id }}</li>
        <li>消息标题 : {{ title }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    // computed: {
    //     id() {
    //         return this.$route.query.id
    //     },
    //     title() {
    //         return this.$route.query.title
    //     }
    // }
    props: ['id', 'title']

}
</script>

<style></style>