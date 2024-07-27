<template>
    <h1>当前求和为: {{ sum }}</h1>
    <button @click="sum++">点我++</button>
    <hr />
    <h1>当前点击时鼠标的坐标为 : x : {{ point.x }}, y : {{ point.y }}</h1>
</template>

<script>

import { ref, onMounted, reactive } from 'vue'
import usePoint from '@/hooks/usePoint';
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0)
        let point = usePoint()



        return {
            sum,
            point
        }
    },

}
</script>