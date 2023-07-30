/*
    Nodejs使用express框架写服务器
*/
const express = require('express') //CommonJS的引入规范
const history = require('connect-history-api-fallback')

const app = express() //返回实例对象

//后端配合，重定向解决history模式刷新问题（没有的地址重定向到上一级路由）
app.use(history())

//指定static/index.html为默认地址
app.use(express.static(__dirname + '/static'))

//是中间件，监听多种请求、也可调用多种函数，对特定数据加工，回调参数会收request、response、next
//注意只能对浏览器输入地址、有地址跳转的行为监听，因为项目是SPA单页应用+静态资源（也会被history重定向影响）
app.use((request, response, next) => {
    console.log('有人请求服务器了');
    console.log('请求来自于', request.get('Host'));
    console.log('请求的地址', request.url);
    next()
})

//配路由，监听get请求，就会响应，回调参数会收request、response（也会被history重定向影响）
app.get('/cars', (request, response) => {
    const cars = [
        { id: '001', name: '奔驰', price: 199 },
        { id: '002', name: '马自达', price: 109 },
        { id: '003', name: '捷达', price: 120 },
    ]
    response.send(cars)
})

//监听8000端口，回调参数会收错误对象
app.listen(8000, (errObj) => {
    if (!errObj) console.log('服务器启动成功了,如需汽车信息，请求地址为：http://localhost:8000/cars');
})
