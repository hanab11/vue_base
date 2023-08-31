<template>
	<h1>一个人的信息</h1>
	<h2 v-show="person.name">姓名：{{ person.name }}</h2>
	<h2 v-show="person.sex">性别：{{ person.sex }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h3>工作种类：{{ person.job.type }}</h3>
	<h3>工作薪水：{{ person.job.salary }}</h3>
	<h3>爱好：{{ person.hobby }}</h3>
	<h3>测试的数据c：{{ person.job.a.b.c }}</h3>
	<button @click="changeInfo">修改人的信息</button>
	<button @click="addSex">添加sex属性</button>
	<button @click="delName">删除name属性</button>

	<h1>测试直接赋值，改变引用地址，丢失响应式</h1>
	<h3>{{ pet }}</h3>
	<button @click="zhangda">假长大，用新对象直接赋值</button>
	<button @click="grow">真长大，对原对象修改</button>
</template>

<script>
/**
 * Vue3把新增、删除数据、下标修改数组的响应式更新问题解决掉了
 */
import { reactive } from 'vue'
export default {
	name: 'App',
	setup() {
		//响应式数据，借助reactive（只能处理对象类型）
		//把基本类型用一个对象包裹，使得reactive处理基本类型（取巧）
		let person = reactive({
			name: '张三',
			age: 18,
			job: {
				type: '前端工程师',
				salary: '30K',
				a: {
					b: {
						c: 666
					}
				}
			},
			hobby: ['抽烟', '喝酒', '烫头']
		})

		// reactive响应式绑定在原本对象地址上（实际上代理函数不同）
		let pet = reactive(['小猫', '小狗'])

		function zhangda() {
			console.log(pet); // {0: '小猫', 1: '小狗'}
			pet = reactive(['大猫', '大狗'])
			console.log(pet); // {0: '大猫', 1: '大狗'}
		}
		function grow() {
			pet[0] = '大猫'
			pet[1] = '大狗'
		}

		//方法
		function changeInfo() {
			person.name = '李四'
			person.sex = '女'
			person.age = 48
			person.job.type = 'UI设计师'
			person.job.salary = '60K'
			person.job.a.b.c = 999
			person.hobby[0] = '学习'
		}
		function addSex() {
			person.sex = '男'
		}
		function delName() {
			delete person.name
		}

		//返回一个对象（常用）
		return {
			person,
			changeInfo,
			addSex,
			delName,
			pet,
			zhangda,
			grow
		}
	}
}
</script>

