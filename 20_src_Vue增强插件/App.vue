<!--
  插件：
    功能：增强Vue
    本质：是包含install方法的对象
      install的第一个参数是Vue，
      第二个以后的参数是使用者传递的数据。
    定义插件：
      对象.install = function (Vue, options){
        //全局过滤器
        Vue.filter()
        //自定义全局指令
        Vue.directive()
        //配置全局混入
        Vue.mixin()
        //给Vue原型上添加方法
        Vue.prototype.$myMethod = function(){}
        Vue.prototype.$myProperty = xxx
      }
    使用插件：
      Vue.use()
-->

<template>
  <div>
    <School></School>
    <hr />
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>