<template>
	<div class="son">
		<h3>我是Son组件（孙），{{ car.name }}--{{ car.price }}</h3>
	</div>
</template>

<script>
import { inject } from 'vue'
export default {
	name: 'Son',
	// 祖孙组件通信
	setup() {
		let car = inject('car')
		console.log(car, 'Son-----')
		return { car }
	}
}
</script>

<style>
.son {
	background-color: orange;
	padding: 10px;
}
</style>