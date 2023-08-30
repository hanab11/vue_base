<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h2>a的值是：{{ a }}（vue3setup优先）</h2>
  <button @click="sayHello">说话(Vue3 所配置的——sayHello)</button>
  <br>
  <br>
  <button @click="sayWelcome">说话(Vue2 所配置的——sayWelcome)</button>
  <br>
  <br>
  <button @click="test1">测试一下在 Vue2 的配置中去读取 Vue3 中的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试一下在 Vue3 的setup配置中去读取 Vue2 中的数据、方法</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'App',
  // vue2的也能写，兼容
  data() {
    return {
      sex: '男',
      a: 100
    }
  },
  methods: {
    sayWelcome() {
      alert('欢迎学习Vue3')
    },
    test1() {
      console.log('测试vue2中读取vue3', this.name)
      console.log('测试vue2中读取vue3', this.age)
      console.log('测试vue2中读取vue3', this.sayHello)
    }
  },
  //此处只是测试一下setup，暂时不考虑响应式的问题
  setup() {
    //数据
    let name = '张三'
    let age = 18
    let a = 200

    //方法
    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好啊！`)
    }
    function test2() {
      console.log('测试vue3setup读取vue2', this.sex)
      console.log('测试vue3setup读取vue2', this.sayWelcome)
      console.log('结论：不要混用v2v3配置');
    }

    //要求返回一个对象（常用）
    //setup不能是async函数，返回值不再是普通对象，而是promise对象
    return {
      name,
      age,
      sayHello,
      test2,
      a
    }

    //要求返回一个函数（渲染函数）
    //retrun () => { return h(xxx)} // 单行省略return和{}
    //return () => h('button', 'h()就是渲染函数') // 前标签，后标签文本
  }
}
</script>

