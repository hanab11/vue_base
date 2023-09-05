<template>
	<div class="son">
		<h3>我是Son组件</h3>
		<Dialog />
	</div>
</template>

<script>
/**
 * 默认的弹窗在son组件里，会撑开结构，不好看
 */
import Dialog from './Dialog.vue'
export default {
	name: 'Son',
	components: { Dialog }
}
</script>

<style>
.son {
	background-color: orange;
	padding: 10px;
}
</style>