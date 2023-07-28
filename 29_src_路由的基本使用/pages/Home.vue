<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    console.log('Home组件挂载完毕')
    window.hRoute = this.$route
    window.hRouter = this.$router

    //将About和Home组件分别挂载一次后，再看是否相同的输出
    console.log(
      'About和Home组件的$route是否相同？',
      window.aRoute === window.hRoute
    )
    console.log(
      'About和Home组件的$router是否相同？',
      window.aRouter === window.hRouter
    )
  },
  beforeDestroy() {
    console.log('Home组件即将销毁')
  },
}
</script>