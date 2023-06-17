<!--
  mixins配置项：
  功能：可以把多个组件共用的配置提取成混合对象mixin.js
  使用方法：
    （1）定义混合
      {
        data(){return...},
        methods:{...},
        ...
      }
    （2）使用混合
      A.全局混入：Vue.mixin(xxx)
      B.局部混入：mixins:[xxx]
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