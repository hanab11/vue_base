<template>
	<h4>{{ person }}</h4>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}K</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRef, toRefs } from 'vue'
export default {
	name: 'Demo',
	setup() {
		//数据
		let person = reactive({
			name: '张三',
			age: 18,
			job: {
				j1: {
					salary: 20
				}
			}
		})

		// const name1 = person.name
		// console.log('%%%',name1)

		// const name2 = toRef(person,'name')
		// console.log('####',name2)

		// toRefs只能批量对 第一层属性 创建引用对象
		const x = toRefs(person)
		console.log('使用toRefs批量创建引用对象', x)

		//返回一个对象（常用）
		return {
			person,
			/* name:toRef(person,'name'),
			age:toRef(person,'age'),
			salary:toRef(person.job.j1,'salary'), */
			...toRefs(person) // 拓展运算符，把最外层对象person摊开，里面就是第一层name、age、job...
		}
	}
}
</script>

