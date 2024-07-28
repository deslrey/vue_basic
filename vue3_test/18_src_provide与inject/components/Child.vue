<template>
    <div class="chlid">
        <h3>我是Chlid组件(子组件)</h3>
        <Son />
    </div>


</template>

<script>
import Son from './Son.vue';

export default {
    name: 'Chlid',
    components: { Son }

}
</script>

<style scoped>
.chlid {
    background-color: orange;
    padding: 10px;
}
</style>