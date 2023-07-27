<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>加密运算后的和为：{{ bigSum }}</h1>
    <h1>我来{{ school }}，学习{{ subject }}</h1>
    <!-- 修饰符不仅仅可用于事件 指令也可 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  computed: {
    //一般计算属性注意：函数形式是简写，完整写法键值对，值是带get、set函数的对象
    /* sum: {
      get() {
        return this.$store.state.sum
      },
      set() {},
    },
    sum() {
      return this.$store.state.sum
    }, */

    //借助mapState生成计算属性，从state里读数据（对象写法）
    //注意字符串sum是state里的数据，且 sum:'sum' 不存在省略写法
    ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }), //三点对象展开运算符

    //借助mapState生成计算属性，从state里读数据（数组写法）可一定程度省略
    //...mapState(['sum', 'school', 'subject']),

    //同上，借助mapGetters
    ...mapGetters(['bigSum']),
  },
  methods: {
    increment() {
      //非业务逻辑，直接调用$store.commit提交
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd() {
      //业务逻辑，就需要调用$store.dispatch派遣Actions先完成
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
    },
  },
  mounted() {
    //mapState 的返回结果是对象{sum:function(),...}，可参考控制台
    const x = mapState({ sum: 'sum', school: 'school', subject: 'subject' })
    console.log(x)
  },
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
