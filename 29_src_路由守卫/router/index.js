// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
	routes: [
		{
			name: 'about',
			path: '/about',
			component: About,
			meta: { isAuth: false },
		},
		{
			name: 'home',
			path: '/home',
			component: Home,
			meta: { isAuth: false },
			children: [ //写了children配置项，二级路由的path不需要加/了
				{
					name: 'news',
					path: 'news',
					component: News,
					meta: { isAuth: true },
					//独享的路由守卫（可以后全局后置路由搭配使用）
					beforeEnter: (to, from, next) => {
						console.log('独享路由守卫', 'to', to, 'from', from)
						if (localStorage.getItem('school') === 'guigu') {
							console.log('鉴权成功');
							next()
						} else {
							console.log('鉴权失败');
							alert('学校名不对，无权限查看！')
						}
					}
				},
				{
					name: 'message',
					path: 'message',
					component: Message,
					meta: { isAuth: true },
					children: [
						{
							name: 'detail', //使用to的对象写法只填name不填path
							path: 'detail', //query的path
							//path: 'detail/:id/:title', //:xxx是占位符，这里接收两个params参数，给到id和title属性
							component: Detail,
							meta: { isAuth: true },

							//第三种写法，props值为函数，返回对象中所有k-v组合，通过props传给Detail组件
							props($route) { //写成函数自动传入$route，用query、params都可
								return {
									id: $route.query.id,
									title: $route.query.title
								}
							}

							//第一种写法，props值为对象，对象内所有k-v组合，通过props传给Detail组件
							/* props: { a: 1, b: 2 } //只能传静态值 */

							//第二种写法，props值为布尔值，把路由接收的所有params参数，通过props传给Detail组件
							/* props: true */
						}
					]
				},
			]
		}
	]
})

//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
//功能：每次点击路由组件 前，执行回调
/* router.beforeEach((to, from, next) => {
	//console.log('前置路由守卫', 'to', to, 'from', from)
	if (to.meta.isAuth) { //判断是否需要鉴权
		if (localStorage.getItem('school') === 'guigu') {
			console.log('鉴权成功');
			next()
		} else {
			console.log('鉴权失败');
			alert('学校名不对，无权限查看！')
		}
	} else {
		next()
	}
}) */

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
//功能：每次点击路由组件 成功后，执行回调
router.afterEach((to, from) => {
	//console.log('后置路由守卫', 'to', to, 'from', from)
	document.title = to.name || 'vue_test' //成功进入路由改变页签 业务逻辑
})


export default router