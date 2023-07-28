<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为：{{ sum }}</h3>
    <h3>列表中第一个人的名字是：{{ fristPersonName }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addPersonLee">添加一个姓李的人</button>
    <button @click="addPersonApi">添加一句话，但是随机取API</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: 'Person',
  data() {
    return {
      name: '',
    }
  },
  /*
    不用map映射，手写computed和methods，会遇到的问题！
    注意：使用命名空间后，
      计算属性，数据存在state里，直接$store.state.命名对象
      方法，调用dispatch、commit方法时，参数必须写'命名对象/函数名'
      特别的，数据存在getters里，参数必须写'命名对象/函数名' //对象的一个属性有斜杠符，只能用数组包裹使用
  */
  computed: {
    sum() {
      return this.$store.state.countAbout.sum
    },
    personList() {
      return this.$store.state.personAbout.personList
    },
    fristPersonName() {
      return this.$store.getters['personAbout/firstPersonName'] //对象的一个属性有斜杠符，只能用数组包裹使用
    },
  },
  methods: {
    addPerson() {
      if (!this.name.trim()) return alert('姓名不能为空')
      const personObj = { id: nanoid(), name: this.name }
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ''
    },
    addPersonLee() {
      if (!this.name.trim()) return alert('姓名不能为空')
      const personObj = { id: nanoid(), name: this.name }
      this.$store.dispatch('personAbout/addPersonLee', personObj)
      this.name = ''
    },
    addPersonApi() {
      this.$store.dispatch('personAbout/addPersonApi') //不需要传对象过去，API自取
      this.name = ''
    },
  },
  mounted() {
    console.log(this.$store) //注意，personAbout等命名对象存放在state里
  },
}
</script>
