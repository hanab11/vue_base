<!--
    组件的自定义事件：
    1)是组件间通信方式之一，适用于 子组件向父组件 传值
    2)和props类似的，事件的回调（函数）都写在父组件中
    3)props是直接给函数之后接收，
      自定义事件通过v-on:或者@/$refs.x.$on绑定，通过$emit触发

    
-->
<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref，事件的时机可以自己决定且不写在标签上） -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名：", name);
    },
    getStudentName(name, ...params) {
      console.log("App收到了学生名：", name, params);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发了！");
    },
    show() {
      alert("事件修饰符native使click变为JS原生的，不加则默认为自定义事件");
    },
  },
  mounted() {
    this.$refs.student.$on("atguigu", this.getStudentName); //绑定自定义事件
    // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
