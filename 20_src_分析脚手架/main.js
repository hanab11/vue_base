/*
main是整个项目的入口

关于不同版本的Vue：
  1.Vue.js和vue.runtime.xxx.js的区别：
    （1）Vue.js是完整版的Vue，包含：核心功能+模板解析器
    （2）vue.runtime.xxx.js是运行时版的Vue，只包含：核心功能，没有模板解析器，但有解析标签模板的专用库
  2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项（模板字符串），
    需要使用render函数接收createElement函数去指定具体的内容
*/

//引入vue（简写的是残缺版vue，它没有模板解析器，用不了模板字符串；组件里，标签类型的模板，vue有专用的库）
import Vue from 'vue'
//引入App组件，它管理所有单组件，是他们的父组件
import App from './App.vue'
//去除vue生产提示
Vue.config.productionTip = false

//创建Vue实例对象vm
new Vue({
  render: h => h(App), //稍后解释；功能是：将App组件注册并放入容器 

  //原本普通函数，render中的参数为函数createElement，即创建元素（html）
  /* render(createElement) {
    return createElement('h1', '你好')
  } */
  //可优化成箭头函数（因为不涉及this）
  /* render: (createElement) => { return createElement('h1', '你好') } */
  //再次，箭头左边只有一个参数可省略小括号，箭头函数指向仅一行return代码也可省略花括号和return
  /* render: createElement => createElement('h1', '你好') */
  //替换掉creatElement和其中你好的内容，就是官方使用render的示例 render: h => h(App)

}).$mount('#root') //vm.$mount函数式指定容器 = el
