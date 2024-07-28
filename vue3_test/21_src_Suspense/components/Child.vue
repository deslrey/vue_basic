<template>
    <div class="chlid">
        <h3>我是Chlid组件</h3>
        <h3>{{ sum }}</h3>
    </div>


</template>

<script>
import { ref } from 'vue';


export default {
    name: 'Chlid',

    async setup() {
        let sum = ref(0)
        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ sum })
            }, 3000)
        })
        return await p
    }

}
</script>

<style scoped>
.chlid {
    background-color: orange;
    padding: 10px;
}
</style>