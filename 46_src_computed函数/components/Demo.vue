<template>
	<h1>一个人的信息</h1>
	姓：<input type="text" v-model="person.firstName">
	<br>
	名：<input type="text" v-model="person.lastName">
	<br>
	<span>展示全名：{{ person.fullName }}</span>
	<br>
	修改全名：<input type="text" v-model="person.fullName">
</template>

<script>
import { reactive, computed } from 'vue'
export default {
	name: 'Demo',
	setup() {
		//数据
		let person = reactive({
			firstName: '张',
			lastName: '三'
		})

		//计算属性——完整写法（考虑读和写，加getter、setter）
		// 可直接给person增加新数据fullName，基于reactive的响应式
		person.fullName = computed({
			get() {
				return person.firstName + '-' + person.lastName
			},
			set(value) {
				const nameArr = value.split('-')
				person.firstName = nameArr[0]
				person.lastName = nameArr[1]
			}
		})

		//计算属性——简写（没有考虑计算属性被修改的情况）
		/* person.fullName = computed(()=>{
			return person.firstName + '-' + person.lastName
		}) */

		//返回一个对象（常用）
		return {
			person
		}
	}
}
</script>

