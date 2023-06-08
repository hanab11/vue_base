<template>
  <!-- 组件的结构——html -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我展示校名</button>
  </div>
</template>
    
<script>
/* 组件交互相关——js（包括数据、方法） */
//默认暴露，以便在App组件头子中import引入（暴露一共3种方式）
export default /*省略了Vue.extend()*/ {
  name: "School",
  data() {
    return {
      name: "硅谷",
      address: "北京",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>
    
<style>
/* 组件的样式——css（非单文件组件的弊病：样式不能跟着组件走） */
.demo {
  background-color: orange;
}
</style>