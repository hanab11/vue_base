<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>加密运算后的和为：{{ bigSum }}</h3>
    <h3>我来{{ school }}，学习{{ subject }}</h3>
    <h3 style="color: red">Person组件总人数是：{{ personList.length }}</h3>
    <!-- 修饰符不仅仅可用于事件 指令也可 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Count',
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  computed: {
    /* 
      注意：使用命名空间后，
        mapState等生成计算属性，数组[]前的第一个参数写命名对象
        mapMutations等生成方法，对象{}前的第一个参数写命名对象
    */

    //借助mapState生成计算属性，从state里读数据（数组写法）
    ...mapState('countAbout', ['sum', 'school', 'subject']),
    ...mapState('personAbout', ['personList']),

    //特别的，借助mapGetters自动生成
    ...mapGetters('countAbout', ['bigSum']),
  },
  methods: {
    //借助mapMutations、mapActions（对象写法），注意自动生成的方法需要传参数，缺省值为event
    ...mapMutations('countAbout', { increment: 'JIA', decrement: 'JIAN' }),
    ...mapActions('countAbout', {
      incrementOdd: 'jiaOdd',
      incrementWait: 'jiaWait',
    }),
  },
  mounted() {
    console.log(this.$store)
  },
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>
