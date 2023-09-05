<template>
	<h4>当前求和为：{{ sum }}</h4>
	<button @click="sum++">点我++</button>
	<hr>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}K</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
export default {
	name: 'Demo',
	setup() {
		//数据
		let sum = ref(0)
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
		 * 设置只读，常用于使用别人定义的响应式数据
		 * shallowReadonly，只给 第一层 设置只读，不限制多层对象修改
		 */
		sum = shallowReadonly(sum)
		person = shallowReadonly(person)
		//sum = readonly(sum)
		//person = readonly(person)

		//返回一个对象（常用）
		return {
			sum,
			...toRefs(person)
		}
	}
}
</script>

