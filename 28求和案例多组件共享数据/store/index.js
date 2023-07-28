//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

/*
	vuex集中式状态管理，集中在store仓库，管理state状态或数据，
	还可以把公共的业务逻辑存放在actions里，把基础操作存放在mutations里（提供了 操作状态 的方法）
	
// context上下文对象里面有commit提交、dispatch派遣、state状态
// 传参用上下文是为了防止业务逻辑太复杂
*/

//准备actions——用于 响应 组件中的动作
const actions = {
	jiaOdd(context, value) {
		console.log('actions中的jiaOdd被调用了')
		if (context.state.sum % 2) {
			context.commit('JIA', value)
		}
	},
	jiaWait(context, value) {
		console.log('actions中的jiaWait被调用了')
		setTimeout(() => {
			context.commit('JIA', value)
		}, 1000)
	}
}
//准备mutations——用于操作数据
const mutations = {
	JIA(state, value) {
		console.log('mutations中的JIA被调用了', state, value)
		state.sum += value
	},
	JIAN(state, value) {
		console.log('mutations中的JIAN被调用了')
		state.sum -= value
	},
	ADD_PERSON(state, personObj) {
		console.log('mutations中的ADD_PERSON被调用了')
		state.personList.unshift(personObj) //放在开头
	}
}
//准备state——用于存储数据
const state = {
	sum: 0, //当前的和
	school: '硅谷',
	subject: '前端',
	personList: [
		{ id: '001', name: '张三' },
		{ id: '002', name: '李斯' }
	]
}
//准备getters——用于加工数据
const getters = {
	bigSum(state) {
		return state.sum * 10
	}
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})