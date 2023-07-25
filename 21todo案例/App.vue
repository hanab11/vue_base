<!--
  组件间通信，父子组件相互传数据（需在子组件props声明接收）：
    1）父传子，在父组件的子组件标签上传 数据；
    2）子传父，在父组件的子组件标签上传 函数，函数的参数即是 子传给父的数据；
    3）子传父再传子，二合一完成兄弟组件间的通信；
    4）子传父，用组件的自定义事件（把:改成@ 或 $on绑定），在子组件上用$emit触发事件；
    
    5）任意通信，通过$refs访问组件标签并且获取数据
    6）任意通信，使用全局事件总线（用$on绑定），在需要传参的组件上用$emit触发事件；
    7）任意通信，使用消息订阅与发布（scribe订阅），在需要传参的组件上发布消息。
-->

<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @receiveTodo="receiveTodo" />
        <MyList :todos="todos" />
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
import pubsub from "pubsub-js";
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
    //如果作为消息的回调函数，第一个参数默认为消息名msgName（不需要的话得用_占位），后面的参数才是数据data
    deleteTodo(_, id) {
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
    updateTodo(id, name) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.name = name;
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
  //在事件总线上绑定和解绑（时机是挂载、销毁之前）
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.msgId = pubsub.subscribe("deleteTodo", this.deleteTodo); //订阅消息并生成消息id
    this.$bus.$on("updateTodo", this.updateTodo);

    /* this.$bus.$on("deleteTodo", this.deleteTodo); */
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    pubsub.unsubscribe(this.msgId); //取消订阅消息id
    this.$bus.$off("updateTodo");

    /* this.$bus.$off("deleteTodo"); */
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