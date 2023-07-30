//引入vue（简写的是残缺版vue，它没有模板解析器，用不了模板字符串；组件里，标签类型的模板，vue有专用的库）
import Vue from 'vue'
//引入App组件，它管理所有单组件，是他们的父组件
import App from './App.vue'

//完整引入
//引入ElementUI组件库
//import ElementUI from 'element-ui';
//引入ElementUI全部样式
//import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button, Row, DatePicker } from 'element-ui';

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用ElementUI；按需的话需要自己注册全局组件
//Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

//创建Vue实例对象vm
new Vue({
  render: f => f(App), //将App组件放入容器
}).$mount('#root') //vm.$mount函数式指定容器 = el
