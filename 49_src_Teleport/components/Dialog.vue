<template>
	<button @click="isShow = true">点我弹个窗（默认）</button>
	<button @click="isShow = true">点我弹个窗（用teleport）</button>
	<!-- 默认 -->
	<div>
		<div v-if="isShow">
			<div class="dialog1">
				<h3>我是一个弹窗</h3>
				<h4>一些内容</h4>
				<h4>一些内容</h4>
				<h4>一些内容</h4>
				<button @click="isShow = false">关闭弹窗</button>
			</div>
		</div>
	</div>
	<!-- 用teleport可以把html标签，传送到指定位置，比如最外层body里 -->
	<div>
		<teleport to="body">
			<div v-if="isShow" class="mask">
				<div class="dialog">
					<h3>我是一个弹窗</h3>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<button @click="isShow = false">关闭弹窗</button>
				</div>
			</div>
		</teleport>
	</div>
</template>

<script>
/**
 * 对话框（弹窗）
 */
import { ref } from 'vue'
export default {
	name: 'Dialog',
	setup() {
		let isShow = ref(false)
		return { isShow }
	}
}
</script>

<style>
.mask {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.1);
}

.dialog {
	position: absolute;
	/* top、left的50%，参考容器左上角点，移动 */
	top: 50%;
	left: 50%;
	/* transform:translate的50%，参考容器自身中心，平移。旋转、缩放、倾斜 */
	/* translate()包括x、y轴，translateX和translateY会相互覆盖 */
	transform: translate(-50%, -50%);
	text-align: center;
	width: 300px;
	height: 300px;
	background-color: green;
}

.dialog1 {
	width: 200px;
	height: 200px;
	background-color: green;
}
</style>