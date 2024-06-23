<template>
	<div>
		<Test />
		<Test2 />
	</div>
</template>

<script>
import Test from './components/Test'
import Test2 from './components/Test2'

export default {
	name: 'App',
	components: { Test, Test2 }
}
</script>