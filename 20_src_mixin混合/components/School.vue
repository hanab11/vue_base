<!-- 组件的结构——html -->
<template>
  <div>
    <h2 @click="showName">学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ adress }}</h2>
  </div>
</template>
    
<!-- 组件交互相关——js（包括数据、方法） -->
<script>
//引入一个混合（局部）
//import { mixin1, mixin2 } from "../mixin.js";

//默认暴露，以便在App组件头子中import引入（暴露一共3种方式）
export default /*省略了Vue.extend()*/ {
  name: "School",
  data() {
    return {
      name: "硅谷",
      adress: "北京",
    };
  },
  //使用配置项mixins
  //mixins: [mixin1, mixin2],
};
</script>
    
<!-- 组件的样式——css（非单文件组件的弊病：样式不能跟着组件走） -->
<style>
</style>