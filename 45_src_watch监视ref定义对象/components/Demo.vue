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
	<hr>
	<h2>测试：{{ person3.taoke.taoke2.name }}</h2>
	<button @click="person3.taoke.taoke2.name += 'test'">点我测试</button>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
	name: 'Demo',
	setup() {
		//数据
		let sum = ref(0)
		let msg = ref('你好啊')
		// 注意是 ref 定义对象
		let person = ref({
			name: '张三',
			age: 18,
			job: {
				j1: {
					salary: 20
				}
			}
		})
		let person2 = reactive({
			name: '李斯'
		})
		let person3 = ref({
			taoke: {
				taoke2: {
					name: '王五'
				}
			}
		})

		console.log(person) // person是ref对象
		console.log(person2); // person2是reactive对象（proxy实现）
		console.log(person.value) // person.value是reactive对象

		// 注：监视范围：函数、ref、reactive数据、数组。
		// 监视的不是值，所以监视ref定义的sum不能.value
		watch(sum, (newValue, oldValue) => {
			console.log('sum的值变化了', newValue, oldValue)
		})

		// 注：监视reactive定义对象（最外层对象），默认强制开启深度监视（deep）
		// 监视ref定义对象，方法一，需要自己配置deep。
		watch(person, (newValue, oldValue) => {
			console.log('person的值变化了', newValue, oldValue)
		}, { deep: true })
		// 方法二，person.value就是reactive对象（最外层对象），默认强制开启深度监视（deep）
		watch(person3.value, (newValue, oldValue) => {
			console.log('person3的值变化了', newValue, oldValue)
		})

		//返回一个对象（常用）
		return {
			sum,
			msg,
			person,
			person3
		}
	}
}
</script>

