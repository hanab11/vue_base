<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="value"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      value: "", //可用双向绑定的value 代替 event.target.value
    };
  },
  methods: {
    add() {
      //校验数据
      if (!this.value.trim()) return alert("输入不能为空！");
      //将输入的内容包装成一个todo对象，才能加入todos数组
      const todoObj = { id: nanoid(), name: this.value, done: false };
      //通知App组件，参数已经传好，可以去todos数组添加对象了
      this.receiveObj(todoObj);
      //清空输入
      this.value = "";
    },
  },
  props: ["receiveObj"],
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>