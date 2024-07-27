<template>
    <h1>一个人的身份信息</h1>
    姓: <input type="text" v-model="person.firstName"></input>
    <br />
    名: <input type="text" v-model="person.lastName"></input>
    <br />
    全名：<input type="text" v-model="person.fullName"></input>
</template>

<script>

import { reactive, computed } from 'vue'

export default {
    name: 'Demo',
    setup() {
        let person = reactive({
            firstName: '张',
            lastName: '三'
        })

        // 计算属性---简写(没有考虑计算属性被修改的情况)
        // person.fullName = computed(() => {
        //     return person.firstName + ' - ' + person.lastName
        // })

        person.fullName = computed({
            get() {
                return person.firstName + ' - ' + person.lastName
            },
            set(value) {
                const nameArr = value.split(' - ')
                person.firstName = nameArr[0]
                person.lastName = nameArr[1]
            }
        })

        return {
            person
        }
    }
}
</script>