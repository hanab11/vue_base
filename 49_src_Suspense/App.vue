<template>
	<div class="app">
		<h3>我是App组件</h3>
		<!-- 用Suspense把异步组件包起来，用插槽实现 -->
		<Suspense>
			<!-- 默认内容放default插槽 -->
			<template v-slot:default>
				<Child />
			</template>
			<!-- 备用内容放fallback插槽 -->
			<template v-slot:fallback>
				<h3>稍等，加载中...</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
// import Child from './components/Child.vue'// 静态引入
import { defineAsyncComponent } from 'vue' // API（函数），定义异步组件
const Child = defineAsyncComponent(() => import('./components/Child.vue')) // 异步引入
export default {
	name: 'App',
	components: { Child },
}
</script>

<style>
.app {
	background-color: gray;
	padding: 10px;
}
</style>