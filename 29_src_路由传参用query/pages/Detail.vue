<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.query.id }}</li>
      <li>消息标题：{{ $route.query.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  mounted() {
    console.log(this.$route) //发现地址用?传参，数据存放$route.query里
  },
}
</script>