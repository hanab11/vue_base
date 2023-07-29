// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
			path: '/about',
			component: About
		},
		{
			path: '/home',
			component: Home,
			children: [ //写了children配置项，二级路由的path不需要加/了
				{
					name: 'news',
					path: 'news',
					component: News,
				},
				{
					path: 'message',
					component: Message,
					children: [
						{
							name: 'detail', //使用to的对象写法只填name不填path
							path: 'detail', //query的path
							//path: 'detail/:id/:title', //:xxx是占位符，这里接收两个params参数，给到id和title属性
							component: Detail,

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
