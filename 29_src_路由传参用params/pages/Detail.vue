<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  mounted() {
    console.log(this.$route) //数据存放$route.params里
  },
}
</script>