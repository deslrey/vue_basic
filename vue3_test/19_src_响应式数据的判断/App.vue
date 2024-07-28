<template>
  <div class="app">
    <h3>我是App组件,{{ name }} --- {{ price }}</h3>
  </div>


</template>

<script>
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref, toRefs } from 'vue';

export default {
  name: 'App',

  setup() {
    let car = reactive({ name: '小米su7', price: '20W' })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    console.log(isProxy(car2));

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
