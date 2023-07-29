//引入vue（简写的是残缺版vue，它没有模板解析器，用不了模板字符串；组件里，标签类型的模板，vue有专用的库）
import Vue from 'vue'
//引入App组件，它管理所有单组件，是他们的父组件
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router' //默认找index.js

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

//创建Vue实例对象vm
new Vue({
  render: f => f(App), //将App组件放入容器
  router: router, //配置项路由
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#root') //vm.$mount函数式指定容器 = el
