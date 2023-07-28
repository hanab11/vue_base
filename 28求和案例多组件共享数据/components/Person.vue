<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为：{{ sum }}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="addPerson">添加</button>
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
  //不用map映射，手写computed和methods
  computed: {
    sum() {
      return this.$store.state.sum
    },
    personList() {
      return this.$store.state.personList
    },
  },
  methods: {
    addPerson() {
      if (!this.name.trim()) return alert('姓名不能为空')
      const personObj = { id: nanoid(), name: this.name }
      this.$store.commit('ADD_PERSON', personObj)
      this.name = ''
    },
  },
}
</script>
