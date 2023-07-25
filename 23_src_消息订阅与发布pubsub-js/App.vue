<!--
    组件的自定义事件：
    1)是组件间通信方式之一，适用于 子组件向父组件 传值
    2)和props类似的，事件的回调（函数）都写在父组件中
    3)props是直接给函数之后接收，
      自定义事件通过v-on:或者@/$refs.x.$on绑定，通过$emit触发

    以下通信都是任意传任意：
    4)通过$refs访问组件标签并且获取数据
    5)全局事件总线：是在自定义事件的基础上，将事件绑定在$bus上，供任意组件触发，谁触发谁传参
    6)pubsub订阅与发布：先订阅消息名/号，等待消息发布，谁发布谁传参
    
-->
<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School />
    <Student />
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
