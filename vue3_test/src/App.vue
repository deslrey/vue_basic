<template>
  <h1>我是App组件</h1>
  <h1 v-show="person.name">姓名: {{ person.name }}</h1>
  <h1>年龄: {{ person.age }}</h1>
  <h1 v-show="person.sex">性别: {{ person.sex }}</h1>
  <h1>工作种类: {{ person.job.type }}</h1>
  <h1>工作薪水: {{ person.job.salary }}</h1>
  <h1>测试的数据: {{ person.job.a.b.c }}</h1>
  <h1>爱好: {{ person.hobby }}</h1>
  <button @click="changeInfo">点我修改数据</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>

import { ref, reactive } from 'vue'

export default {
  name: 'App',

  setup() {

    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30K',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['唱', '跳', 'RAP', '篮球']
    })

    function changeInfo() {
      person.name = "李四"
      person.age = 20
      person.job.type = 'UI工程师'
      person.job.a.b.c = 999
    }

    function addSex() {
      person.sex = '男'
    }
    function deleteName() {
      delete person.name
    }

    return {
      person,
      changeInfo,
      addSex,
      deleteName
    }
  }
}
</script>
