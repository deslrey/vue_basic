<template>
	<div class="container">
		<Category title="美食">
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<a slot="footer" href="http://www.atguigu.com">更多美食</a>
		</Category>
		<Category title="游戏">
			<ul slot="center">
				<li v-for="(g, index) in games" :key="index">{{ g }}</li>
			</ul>
			<div class="foot" slot="footer">
				<a href="http://www.atguigu.com">更多美食</a>
				<a href="http://www.atguigu.com">更多美食</a>
			</div>
		</Category>
		<Category title="电影">
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<template v-slot:footer>
				<div class="foot">
					<a href="http://www.atguigu.com">更多美食</a>
					<a href="http://www.atguigu.com">更多美食</a>
					<a href="http://www.atguigu.com">更多美食</a>
				</div>
				<h4>欢迎前来观看</h4>
			</template>
		</Category>
	</div>
</template>

<script>

import Category from "./components/Category";

export default {
	name: 'App',
	components: { Category },
	data() {
		return {
			foods: ['火锅', '烧烤', '小龙虾', '牛排'],
			games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
			films: ['《教父》', '《拆弹专家》', '《夏洛特烦恼》', '《尚硅谷》']
		}
	},

}
</script>

<style scoped>
.container,
.foot {
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