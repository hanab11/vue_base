//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引入axios
import axios from 'axios'
//引入nanoid
import { nanoid } from 'nanoid'
//应用Vuex插件
Vue.use(Vuex)

/*
	1.vuex集中式状态管理，集中在store仓库，管理state状态或数据，
	还可以把公共的业务逻辑存放在actions里，把基础操作存放在mutations里（提供了 操作状态 的方法）
	
	2.如果有多套state等需要包裹成对象，为了防止命名冲突，需用namespaced:true配置项
	注意，对象内为键值对形式，暴露的时候需要用modules配置项

// context上下文对象里面有commit提交、dispatch派遣、state状态
// 传参用上下文是为了防止业务逻辑太复杂
*/

const countAbout = {
	namespaced: true,
	//准备actions——用于 响应 组件中的动作
	actions: {
		jiaOdd(context, value) {
			console.log('countAbout/actions中的jiaOdd被调用了')
			if (context.state.sum % 2) {
				context.commit('JIA', value)
			}
		},
		jiaWait(context, value) {
			console.log('countAbout/actions中的jiaWait被调用了')
			setTimeout(() => {
				context.commit('JIA', value)
			}, 1000)
		}
	},
	//准备mutations——用于操作数据
	mutations: {
		JIA(state, value) {
			console.log('countAbout/mutations中的JIA被调用了', state, value)
			state.sum += value
		},
		JIAN(state, value) {
			console.log('countAbout/mutations中的JIAN被调用了')
			state.sum -= value
		}
	},
	//准备state——用于存储数据
	state: {
		sum: 0, //当前的和
		school: '硅谷',
		subject: '前端',
	},
	//准备getters——用于加工数据，写法等同计算属性
	getters: {
		bigSum(state) {
			return state.sum * 10
		}
	}
}

const personAbout = {
	namespaced: true,
	actions: {
		addPersonLee(context, personObj) {
			console.log('personAbout/actions中的addPersonLee被调用了')
			if (personObj.name.indexOf('李') === 0) { //首个索引就是姓
				context.commit('ADD_PERSON', personObj)
			} else {
				alert('添加人必须姓李')
			}
		},
		addPersonApi(context) {
			console.log('personAbout/actions中的addPersonApi被调用了')
			axios.get('http://api.kekc.cn/api/wawr').then(
				(response) => {
					context.commit('ADD_PERSON', { //response的data值只是name，还需要包装成对象
						id: nanoid(), name: response.data
					})
				},
				(error) => {
					alert(error.message)
				},
			)
		}
	},
	mutations: {
		ADD_PERSON(state, personObj) {
			console.log('personAbout/mutations中的ADD_PERSON被调用了')
			state.personList.unshift(personObj) //放在开头
		}
	},
	state: {
		personList: [
			{ id: '001', name: '张三' },
			{ id: '002', name: '李斯' }
		]
	},
	getters: {
		firstPersonName(state) {
			return state.personList[0].name
		}
	}
}

//创建并暴露store
export default new Vuex.Store({
	modules: {
		countAbout: countAbout,
		personAbout: personAbout //同名省略
	}
})