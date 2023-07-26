<!--
  A发送ajax请求（前端浏览器网络技术）
    1.xhr：原生使用麻烦，new XMLHttpRequest()
    2.jQuery：核心对DOM操作，和vue等框架理念不同，$get $post
    ✔3.axios：支持请求拦截器、响应拦截器、体积小
    4.fetch：和xhr平级，js里内置，window.fetch，缺点是包装两层then，不能在IE使用
  B跨域（浏览器同源策略限制，协议主机端口不同）
    1.cors：需要后端加响应头
    2.jsonp：只能解决get请求；借助script标签src属性引入外部资源，不受同源限制，也需要后端配合
    ✔3.proxy：利用代理服务器和主机端口同源，它们代理、服务器之间使用http交换数据，不受同源限制
-->
<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getStudents() {
      //向代理服务器get数据
      axios.get('http://localhost:8080/demo1/students').then(
        //Promise.then()即当，接收2个响应对象并回调，注意axios返回的都是对象
        (response) => {
          console.log('请求成功了', response.data)
        },
        (error) => {
          console.log('请求失败了', error.message)
        }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/demo2/cars').then(
        (response) => {
          console.log('请求成功了', response.data)
        },
        (error) => {
          console.log('请求失败了', error.message)
        }
      )
    },
  },
}
</script>
