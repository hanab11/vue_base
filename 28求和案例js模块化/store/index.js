//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引入count、person 作命名空间对象
import countAbout from './count'
import personAbout from './person'
//应用Vuex插件
Vue.use(Vuex)

/*
	1.vuex集中式状态管理，集中在store仓库，管理state状态或数据，
	还可以把公共的业务逻辑存放在actions里，把基础操作存放在mutations里（提供了 操作状态 的方法）
	
	2.如果有多套state等需要包裹成对象，为了防止命名冲突，需用namespaced:true配置项
	注意，对象内为键值对形式，暴露的时候需要用modules配置项

	3.store仓库用命名空间写多套state等对象时，利用js的模块化，分模块分出去，用的时候import引用即可

// context上下文对象里面有commit提交、dispatch派遣、state状态
// 传参用上下文是为了防止业务逻辑太复杂
*/

//创建并暴露store
export default new Vuex.Store({
	modules: {
		countAbout: countAbout,
		personAbout //同名省略
	}
})