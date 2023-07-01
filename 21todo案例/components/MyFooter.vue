<template>
  <div class="todo-footer" v-if="total">
    <label>
      <!-- 如下代码也能实现，:checked只能解析表达式，可使用计算属性，使用函数时不生效 -->
      <!-- <input type="checkbox" :checked="isAll" @change="handleSelectAll" /> -->

      <!-- 可交互数据，可以考虑使用v-model，isAll是一个计算属性而不是props接收的，所以这里推荐双向绑定 -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ done }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="handleClear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "clearTodo"],
  computed: {
    total() {
      return this.todos.length;
    },
    done() {
      //使用reduce做条件计数，参数分别是pre（函数返回值会赋值给下次循环的pre），current数组当前的数据
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0); //0设为pre的初始值

      //使用foreach做条件计数
      /* let n = 0;
      this.todos.forEach((todo) => {
        if (todo.done) n++;
      });
      return n; */
    },
    //isAll不能简写，双向绑定需要补充setter
    isAll: {
      get() {
        return this.done === this.total && this.total > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    //不生效
    /* isAll1() {
      return this.done === this.total;
    }, */

    //处理全选
    handleSelectAll(event) {
      //通知App组件将done值设定
      this.checkAllTodo(event.target.checked);
    },
    handleClear() {
      //通知App组件将已完成todo从todos中剔除
      if (confirm("确定清除已完成任务吗？")) this.clearTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>