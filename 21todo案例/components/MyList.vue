<template>
  <ul class="todo-main">
    <!-- 可以直接在组件标签上做遍历 -->
    <!-- :todo是用组件标签向子组件传对象/表达式（不加:相当于字符串），需要子组件用props接收 -->
    <TodoItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "MyList",
  components: { TodoItem },
  props: ["todos", "checkTodo", "deleteTodo"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>