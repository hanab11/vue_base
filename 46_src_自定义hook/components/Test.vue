<template>
	<h2>我是Test组件，复用一下之前的钩子</h2>
	<h2>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
	name: 'Test',
	setup() {
		const point = usePoint()
		return { point }
	}
}
</script>