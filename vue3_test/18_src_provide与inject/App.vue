<template>
  <div class="app">
    <h3>我是App组件(父组件),{{ name }} --- {{ price }}</h3>
    <Child />
  </div>


</template>

<script>
import { provide, reactive, toRefs } from 'vue';
import Child from './components/Child.vue';

export default {
  name: 'App',
  components: { Child },

  setup() {
    let car = reactive({ name: '小米su7', price: '20W' })

    provide('car', car)

    return { ...toRefs(car) }
  }

}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
