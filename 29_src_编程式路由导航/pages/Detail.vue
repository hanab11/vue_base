<template>
  <div>
    <ul>
      <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'title'],
  mounted() {
    console.log(this.$route) //数据存放$route.params里
  },
}
</script>