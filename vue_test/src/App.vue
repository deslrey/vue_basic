<template>
    <div>
        <Student name="张三" sex="男" :age="19" />
    </div>
</template>

<script>

import Student from './components/Student';

export default {
    name: 'App',
    components: { Student }
}
</script>

<style></style>