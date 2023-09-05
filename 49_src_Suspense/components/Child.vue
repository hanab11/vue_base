<template>
	<div class="child">
		<h3>我是Child组件</h3>
		{{ sum }}
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'Child',
	/**
	 * 首先在App把Child定义异步组件，异步引入
	 * setup就可以加async
	 */
	async setup() {
		let sum = ref(0)
		let p = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ sum }) // 成功了就会把 {sum} 返回出去
			}, 3000)
		})
		return await p
	}
}
</script>

<style>
.child {
	background-color: skyblue;
	padding: 10px;
}
</style>