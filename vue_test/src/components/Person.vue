<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count 组件的求和数据为 {{ sum }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personAbout.personList
        },
        sum() {
            return this.$store.state.countAbout.sum
        }
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name }
            console.log(personObj);
            this.$store.commit('personAbout/ADD_PERSON', personObj)
            this.name = ''
        }
    },
}
</script>

<style></style>