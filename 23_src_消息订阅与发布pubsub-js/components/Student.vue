<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给到学校组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"; //备注：某些依赖包只能本地安装，全局安装反而会报错

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    sendStudentName() {
      pubsub.publish("hello", this.name);

      //this.$bus.$emit("hello", this.name);
    },
  },
  mounted() {
    /* console.log("Student访问总线", this.$bus); */
  },
};
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
