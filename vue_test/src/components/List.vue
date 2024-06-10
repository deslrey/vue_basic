<template>
    <ul class="todo-main">
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </ul>
</template>

<script>
import MyItem from './MyItem'

export default {
    name: 'List',

    components: { MyItem },

    data() {
        return {
            todos: [
                { id: '001', title: '唱', done: true },
                { id: '002', title: '跳', done: false },
                { id: '003', title: 'RAP', done: true },
                { id: '004', title: '篮球', done: false },
            ]
        }
    },
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>