<!--
	插槽也是组件间通信之一：
		1.父组件可以向子组件的 插槽位置 插入html结构（父传子，html）
	作用域插槽的理解：
		1.数据在子组件自身，但根据数据生成的结构由父组件来决定
		（games在Category里，但使用数据遍历的结构由App决定）
		2.子组件在插槽上绑定:x="x"，
		父组件通过template标签、scope获取 作用域对象scopeData（子传父，数据）
-->
<template>
  <div class="container">
    <Category title="游戏">
      <template scope="scopeData">
        <ul>
          <li v-for="(game, index) in scopeData.games" :key="index">
            {{ game }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
        <!-- ES6语法，解构赋值，用{}，将scopeData.games属性的值赋给对应变量games -->
        <ol>
          <li style="color: red" v-for="(game, index) in games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{ games }">
        <!-- slot-scope 同 scope，之后都被v-slot代替 -->
        <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: { Category },
}
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
