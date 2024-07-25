<template>
  <h1>我是App组件</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <h1>{{ sex }}</h1>
  <button @click="sayHello">说话(Vue3所配置的-sayHello)</button>
  <br />
  <br />
  <button @click="sayWelcome">说话(Vue2所配置的-sayWelcome)</button>
  <br />
  <br />
  <button @click="test1">测试在Vue2中读取Vue3中的数据和方法</button>
  <br />
  <br />
  <button @click="test2">测试在Vue3中读取Vue2中的数据和方法</button>

</template>

<script>
import { h } from 'vue'

export default {
  name: 'App',

  data() {
    return {
      sex: '男'
    }
  },

  methods: {

    sayWelcome() {
      alert('欢迎来到尚硅谷学习')
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
    }

  },

  setup() {

    // 数据
    let name = '张三'
    let age = 18

    // 方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了,你好啊!!!`)
    }

    function test2() {
      console.log(this.sex);
      console.log(this.sayWelcome);
      console.log(name);
      console.log(age);
    }

    return {
      name,
      age,
      sayHello,
      test2
    }

    // 返回一个函数(渲染函数)
    // return () => h('h1', '尚硅谷')
  }
}
</script>
