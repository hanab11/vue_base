<template>
  <ul class="todo-main">
    <!-- 可以直接在组件标签上做遍历 -->
    <!-- :todo是用组件标签向子组件传对象/表达式（不加:相当于字符串），需要子组件用props接收 -->
    <transition-group name="todo" appear>
      <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </transition-group>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "MyList",
  components: { TodoItem },
  props: ["todos"],
};
</script>

<style scoped>
/* animation */
.todo-enter-active {
  animation: ani 0.5s linear; /* 匀速 */
}

.todo-leave-active {
  animation: ani 0.5s linear reverse; /* 匀速，反转 */
}

/* 动画写法：关键帧，使用animation: name调用 */
@keyframes ani {
  from {
    transform: translateX(100%); /* 移动，X横轴 */
  }
  to {
    transform: translateX(0px); /* 0px为页面最右侧 */
  }
}
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