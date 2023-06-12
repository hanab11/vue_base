<!--
  props配置项：
  功能：让组件接收外部传入的数据
    (1)传递数据
      <Demo name="xxx"></name>
    (2)接收数据
    三种方式：
      A.只接收
      B.接收并限制类型
      C.接收并限制类型、限制必要性、指定默认值
  备注：props是只读的，Vue底层会监测对props的修改，如果修改会警告；
        若需求确实要修改，可以在data或computed(计算属性)中
        令一个中转变量 = age(举例)，修改这个中转变量的值
-->


<template>
  <div>
    <!-- :是v-bind动态绑定，会把引号内的内容视为js表达式 -->
    <Student name="李四" sex="女" :age="18"></Student>
    <hr />
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {},
};
</script>

<style>
</style>