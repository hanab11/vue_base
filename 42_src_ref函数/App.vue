<template>
	<h1>一个人的信息</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h3>工作种类：{{ job.type }}</h3>
	<h3>工作薪水：{{ job.salary }}</h3>
	<button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'App',
	setup() {
		//响应式数据，借助ref（注意，ref产生的都是引用对象，需要用.value访问）

		//处理基本类型
		let name = ref('张三')
		let age = ref(18)

		//处理对象类型（引用对象内部还有对象，实现方式就不是ref了，是ES6的proxy，它封装在reactive函数里）
		let job = ref({
			type: '前端工程师',
			salary: '30K'
		})

		//方法
		function changeInfo() {
			console.log('先打印再修改', name, age)
			name.value = '李四'
			age.value = 48

			console.log('先打印再修改', job.value)
			job.value.type = 'UI设计师'
			job.value.salary = '60K'
		}

		//返回一个对象（常用）
		//返回的时正常返回，不用.value，template模板自动解析
		return {
			name,
			age,
			job,
			changeInfo
		}
	}
}
</script>