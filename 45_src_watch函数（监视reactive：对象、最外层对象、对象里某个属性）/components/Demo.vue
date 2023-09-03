<template>
	<h2>当前求和为：{{ sum }}</h2>
	<button @click="sum++">点我+1</button>
	<hr>
	<h2>当前的信息为：{{ msg }}</h2>
	<button @click="msg += '！'">修改信息</button>
	<hr>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h2>薪资：{{ person.job.job1.salary }}K</h2>
	<button @click="person.name += '~'">修改姓名</button>
	<button @click="person.age++">增长年龄</button>
	<button @click="person.job.job1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watch } from 'vue'
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
				job1: {
					salary: 20
				}
			}
		})

		//情况一：监视ref所定义的一个响应式数据，immediate配置写在回调之后
		/* watch(sum, (newValue, oldValue) => {
			console.log('sum变了', newValue, oldValue)
		}, { immediate: true }) */

		//情况二：监视ref所定义的多个响应式数据，用数组装起来
		watch([sum, msg], (newValue, oldValue) => {
			console.log('sum或msg变了', newValue, oldValue)
		}, { immediate: true })


		/* 
			情况三：监视reactive所定义的响应式数据的全部属性
					1.注意：此处无法正确的获取oldValue（只要是对象就出bug）
					2.注意：监视reactive定义对象（最外层对象），默认强制开启深度监视（deep）
		*/
		/* watch(person, (newValue, oldValue) => {
			console.log('person变化了', newValue, oldValue)
		}, { deep: false }) //此处的deep配置无效 */

		//情况四：监视reactive所定义的响应式数据中的某个属性，监视范围：函数、ref、reactive数据、数组
		/* watch(() => person.name, (newValue, oldValue) => {
			console.log('person的name变化了', newValue, oldValue)
		}) */

		//情况五：监视reactive所定义的响应式数据中的某些属性，即便监视数组，里面也得是函数、ref、reactive数据、数组
		watch([() => person.name, () => person.age], (newValue, oldValue) => {
			console.log('person的name或age变化了', newValue, oldValue)
		}) // 变相解决情况三

		//特殊情况，监视reactive所定义的响应式数据中的某个属性job，job是对象，所以deep配置有效
		watch(() => person.job, (newValue, oldValue) => {
			console.log('person的job变化了', newValue, oldValue) // 只要是对象，oldValue就无法正确获取
		}, { deep: false })


		//返回一个对象（常用）
		return {
			sum,
			msg,
			person
		}
	}
}
</script>

