<!-- 组件的结构——html -->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">点我年龄++</button>
  </div>
</template>
    
<!-- 组件交互相关——js（包括数据、方法） -->
<script>
//默认暴露，以便在App组件头子中import引入（暴露一共3种方式）
export default /*省略了Vue.extend()*/ {
  name: "Student",
  data() {
    return {
      msg: "初学Vue",
      myAge: this.age,
      /* name: "张三",
      sex: "男",
      age: 18, */
    };
  },
  //props配置属性，具体数值可从外部传入
  //简单声明接收
  //props: ["name", "sex", "age"],

  //接收同时，限制类型
  /* props: {
    name: String,
    sex: String,
    age: Number,
  }, */

  //接收同时，限制类型+限制必要性+指定默认值
  props: {
    name: {
      type: String, //name类型是字符串
      required: true, //name是必须的
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 100, //缺省值
    },
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
};
</script>
    
<!-- 组件的样式——css（非单文件组件的弊病：样式不能跟着组件走） -->
<style>
</style>