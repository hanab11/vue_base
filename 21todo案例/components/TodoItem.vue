<template>
  <li>
    <label>
      <!-- 如下代码也能实现，但是不推荐，因为违反会修改props，虽然props对象内部的数据vue并没有监控到 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->

      <!-- 使用:checked初始化并动态地绑定√不√ -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 使用props接收到对象后，使用插值语法表达 -->
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDel(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "TodoItem",
  //声明接收todo对象
  props: ["todo"],
  methods: {
    //处理勾选检查、处理删除都是在操作App里的todos，需要app给函数或者设置自定义事件
    handleCheck(id) {
      //通知App组件将done值取反（触发自定义事件，谁触发谁传值）
      this.$bus.$emit("checkTodo", id);
    },
    handleDel(id) {
      //通知App组件将对应todo对象删除（使用消息发布传值）
      if (confirm("确定删除吗？")) pubsub.publish("deleteTodo", id);

      /* this.$bus.$emit("deleteTodo", id); */
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none; /* 可以通过display控制显示与否 */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>