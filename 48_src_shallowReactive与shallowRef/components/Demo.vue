<template>
	<h4>当前的x.y值是：{{ x.y }}</h4>
	<button @click="x = { y: 888 }">点我替换x</button>
	<button @click="x.y++">点我x.y++</button>
	<hr>
	<h4>{{ person }}</h4>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}K</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="upSalary">涨薪</button>
</template>

<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
	name: 'Demo',
	setup() {
		//数据
		// shallowReactive，只给 第一层数据 加响应式
		let person = shallowReactive({
			name: '张三',
			age: 18,
			job: {
				j1: {
					salary: 20
				}
			}
		})
		// shallowRef，只给 基本类型 加响应式（不给对象类型加）
		// 后续功能，不涉及修改对象里的属性，而是用新对象去替换x
		let x = shallowRef({
			y: 0
		})
		console.log('x是引用对象，注意观察里面的value', x)

		function upSalary() {
			person.job.j1.salary++
			console.log("虽然我没有响应式，但是还是执行了 salary++，点其他按钮更新页面");
		}

		//返回一个对象（常用）
		return {
			x,
			person,
			...toRefs(person),
			upSalary
		}
	}
}
</script>

