<!--
  ref属性：
  1.被用来给元素或子组件注册引用信息（替代id）
  2.应用在html标签上获取真实DOM元素，应用在组件标签上获取组件实例对象（vc）
  3.使用方式：
    打标识：<h1 ref="xxx"></h1> 或 <App ref="xxx"/>
    获取数据：this.$refs.xxx
-->


<template>
  <div>
    <h1 v-text="msg" ref="title" id="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方DOM元素</button>
    <School ref="sch" id="sch"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDOM() {
      //console.log(document.getElementById("title")); //ref和id功能类似 但vue中尽量少做原生操作
      console.log(this.$refs.title); //获取真实DOM元素
      console.log(this.$refs.btn); //获取真实DOM元素

      //但是组件标签上的ref和id有明显区别
      console.log(
        "通过$refs访问组件标签并且获取数据",
        this.$refs.sch,
        this.$refs.sch.address
      ); //获取School组件实例对象（vc）
      console.log("通过id访问组件标签", document.getElementById("sch"));
    },
  },
};
</script>

<style>
</style>