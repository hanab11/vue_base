<template>
	<h2>当前求和为：{{ sum }}</h2>
	<button @click="sum++">点我+1</button>
	<hr>
	<h2>当前的信息为：{{ msg }}</h2>
	<button @click="msg += '！'">修改信息</button>
	<hr>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h2>薪资：{{ person.job.j1.salary }}K</h2>
	<button @click="person.name += '~'">修改姓名</button>
	<button @click="person.age++">增长年龄</button>
	<button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue'
export default {
	name: 'Demo',
	setup() {
		//数据
		let sum = ref(0)
		let msg = ref('你好啊')
		let person = reactive({
			name: '张三',
			age: 18,
			job: {
				j1: {
					salary: 20
				}
			}
		})

		/**
		 * 观察函数的思路
		 * watch，监视sum，传新旧value写回调，传配置
		 * watchEffect，也不说监视谁，直接写回调
		 */

		watch(sum, (newValue, oldValue) => {
			console.log('sum的值变化了', newValue, oldValue)
		}, { immediate: true })

		watchEffect(() => {
			/**
			 * 注意：x1、x2即便没被别处引用，它们用到sum、salary数据（相当于监视），就执行回调，
			 * 在逻辑上有点像computed（有值变化就自动执行），
			 * 但computed注重结果（回调函数的返回值），
			 * watchEffect注重过程（回调函数的函数体）
			 */
			const x1 = sum.value // 用到数据
			const x2 = person.job.j1.salary // 用到数据

			console.log('watchEffect所指定的回调执行了') // 执行同一套逻辑
		}) // 默认开启immediate配置

		//返回一个对象（常用）
		return {
			sum,
			msg,
			person
		}
	}
}
</script>

