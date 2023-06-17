<!-- 组件的结构——html -->
<template>
  <div>
    <!-- |使用过滤器filter、带自动锁定焦点的绑定指令fbind、Vue上的方法 -->
    <h2>学校姓名：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ adress }}</h2>
    <input type="text" v-fbind:value="adress" />
    <br />
    <button @click="test">点我测试hello方法</button>
  </div>
</template>
    
<!-- 组件交互相关——js（包括数据、方法） -->
<script>
//默认暴露，以便在App组件头子中import引入（暴露一共3种方式）
export default /*省略了Vue.extend()*/ {
  name: "School",
  data() {
    return {
      name: "硅谷abcdef",
      adress: "北京",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>
    
<!-- 组件的样式——css（非单文件组件的弊病：样式不能跟着组件走） -->
<style>
</style>