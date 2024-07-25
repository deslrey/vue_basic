<template>
  <h1>我是App组件</h1>
  <h1>姓名: {{ name }}</h1>
  <h1>年龄: {{ age }}</h1>
  <h1>工作种类: {{ job.type }}</h1>
  <h1>工作薪水: {{ job.salary }}</h1>
  <button @click="changeInfo">点我修改数据</button>
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'App',

  setup() {

    // 数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '30K'
    })

    function changeInfo() {
      // name.value = "李四"
      // age.value = 20
      job.value.type = 'UI工程师'
    }

    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>
