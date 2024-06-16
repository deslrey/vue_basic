<template>
    <div class="todo-footer" v-show="todal">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ todal }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: ['todos', 'checkAllTodo', 'clearAllTodo'],
    computed: {
        todal() {
            return this.todos.length
        },
        doneTotal() {
            //     const x = this.todos.reduce((pre, current) => {
            //         console.log('@', pre, current);
            //         return pre + (current.done ? 1 : 0)
            //     }, 0)

            return this.todos.reduce((pre, doto) => pre + (doto.done ? 1 : 0), 0)
        },
        isAll: {
            get() {
                return this.doneTotal === this.todal && this.todal > 0
            },
            set(checked) {
                this.checkAllTodo(checked)
            }

        }

    },
    methods: {
        checkAll(e) {
            this.checkAllTodo(e.target.checked)
        },
        clearAll() {
            if (confirm('确定删除吗?')) {
                this.clearAllTodo()
            }
        }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>