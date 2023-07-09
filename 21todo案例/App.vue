<!--
  父子组件相互传数据（需在子组件props声明接收）：
    1）父传子，在父组件的子组件标签上传 数据；
    2）子传父，在父组件的子组件标签上传 函数，函数的参数即是 子传给父的数据；
    3）子传父，用组件的自定义事件（把:改成@），在子组件上用$emit触发事件；
    4）A传C，使用全局事件总线
-->

<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @receiveTodo="receiveTodo" />
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearTodo="clearTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      //JSON的两个函数，stringify和parse可相互转换字符串和js对象，注意JSON.parse(NULL)结果是NULL
      todos: JSON.parse(localStorage.getItem("todos")) || [
        { id: "001", name: "睡觉", done: false },
        { id: "002", name: "吃饭", done: true },
        { id: "003", name: "学习", done: true },
      ],
    };
  },
  methods: {
    //接收一个todo
    receiveTodo(obj) {
      this.todos.unshift(obj);
    },
    //勾选、取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //勾选、取消勾选全部todo
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //删除一个todo，一般删除有3种：popshift按顺序删、splice按下标删（配合indexOf查找再删除）、filter过滤器（过滤指定内容）
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //清除已完成todo（过滤指定内容）
    clearTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      immediate: true, //初始化立刻执行一次
      deep: true, //深度监视具体内容
      handler(value) {
        //监视并存储到本地，setItem传参是一个键值对
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>