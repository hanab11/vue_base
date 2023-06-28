<template>
  <li>
    <label>
      <!-- 使用:checked动态地绑定√不√ -->
      <input type="checkbox" :checked="todo.done" />
      <!-- 使用props接收到对象后，使用插值语法表达 -->
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  //声明接收todo对象
  props: ["todo"],
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
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>