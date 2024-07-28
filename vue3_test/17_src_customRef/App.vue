<template>
  <input type="text" v-model="keyWord" />

  <h1>{{ keyWord }}</h1>
</template>

<script>

import { ref, customRef } from 'vue';

export default {
  name: 'App',
  setup() {

    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef这个容器中读取了数据,我把${value}给他了`);
            track()
            return value
          },
          set(newValue) {
            console.log(`有人把myRef这个容器中数据改为了: ${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()
            }, delay)
          }
        }
      })
    }


    // let keyWord = ref('hello')  //  使用Vue提供的ref
    let keyWord = myRef('hello', 500)  //  使用自定义的ref


    return {
      keyWord
    }

  }

}
</script>
