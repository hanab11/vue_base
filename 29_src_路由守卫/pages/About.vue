<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    console.log('About组件挂载完毕')
    window.aRoute = this.$route
    window.aRouter = this.$router
  },
  beforeDestroy() {
    console.log('About组件即将销毁')
  },
  //通过路由规则进入，进入组件 前 被调用
  beforeRouteEnter(to, from, next) {
    console.log('组件内路由守卫，执行单组件的业务逻辑', 'to', to, 'from', from)
    if (localStorage.getItem('school') === 'guigu') {
      console.log('鉴权成功')
      next()
    } else {
      console.log('鉴权失败')
      alert('学校名不对，无权限查看！')
    }
  },
  //通过路由规则离开，离开组件 前 被调用
  beforeRouteLeave(to, from, next) {
    next()
  },
}
</script>