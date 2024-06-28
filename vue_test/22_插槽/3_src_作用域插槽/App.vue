<template>
	<div class="container">

		<Category title="游戏">
			<template scope="{games}">
				<ul>
					<li v-for="(g, index) in games" :key="index">{{ g }}</li>
				</ul>
			</template>
		</Category>
		<Category title="游戏">
			<template scope="{games}">
				<ol>
					<li v-for="(g, index) in games" :key="index">{{ g }}</li>
				</ol>
			</template>
		</Category>
		<Category title="游戏">
			<template scope="{games}">
				<h4>
					<li v-for="(g, index) in games" :key="index">{{ g }}</li>
				</h4>
			</template>
		</Category>

	</div>
</template>

<script>

import Category from "./components/Category";

export default {
	name: 'App',
	components: { Category },


}
</script>

<style scoped>
.container {
	display: flex;
	justify-content: space-around;

}

h4 {
	text-align: center;
}

video {
	width: 100%;
}

img {
	width: 100%;
}
</style>