<!-- 组件的结构——html -->
<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>
    
<!-- 组件交互相关——js（包括数据、方法） -->
<script>
//默认暴露，以便在App组件头子中import引入（暴露一共3种方式）
export default /*省略了Vue.extend()*/ {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
};
</script>
    
<!-- 组件的样式——css（非单文件组件的弊病：样式不能跟着组件走） -->
<style>
</style>