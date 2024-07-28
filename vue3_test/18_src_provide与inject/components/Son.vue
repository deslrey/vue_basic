<template>
    <div class="son">
        <h3>我是Son组件(孙组件),{{ car.name }} --- {{ car.price }}</h3>
    </div>


</template>

<script>
import { inject } from 'vue';




export default {
    name: 'Son',

    setup() {
        let car = inject('car')
        console.log('******', car);
        return { car }
    }

}
</script>

<style scoped>
.son {
    background-color: skyblue;
    padding: 10px;
}
</style>