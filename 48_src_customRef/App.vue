<template>
	<input type="text" v-model="keyWord">
	<h3>防抖地读取数据：</h3>
	<h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue'
export default {
	name: 'App',
	setup() {
		// 实现防抖效果，自定义一个ref叫myRef
		function myRef(value, delay) {
			let timer
			// customRef参数是回调，回调参数是track，trigger（跟踪，触发）
			return customRef((track, trigger) => {
				// 要求返回对象，有getter，setter
				return {
					// 自定义get
					get() {
						console.log(`有人读数据了，读取：${value}`)
						// 通知Vue追踪返回值value的变化（提前和getter商量一下，让它认为这个value是有用的）
						track()
						return value
					},
					// 自定义set
					set(newValue) {
						console.log(`有人写数据了，写入：${newValue}`)

						clearTimeout(timer) // 清理定时器
						timer = setTimeout(() => {
							value = newValue
							// 通知Vue去重新解析模板
							trigger()
						}, delay)
					},
				}
			})
		}

		let keyWord = myRef('hello', 500) // 使用程序员自定义的ref
		//let keyWord = ref('hello') // 使用Vue默认的ref

		return { keyWord }
	}
}
</script>

