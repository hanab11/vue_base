<template>
  <ul>
    <li :style="{ opacity }"><h3>欢迎学习Vue</h3></li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1,
    }
  },
  /*
  	News等组件使用了keep-alive缓存住，不走销毁流程，（且不销毁，也不会再次挂载）
	又想清理定时器怎么办？配套使用 路由组件专用的生命周期钩子activated/deactivated
  */
  activated() {
    console.log('News组件被激活了')
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    console.log('News组件失活了')
    clearInterval(this.timer)
  },

  //以下代码是以前给组件，绑定、清理定时器，前提是得走组件销毁流程
  /* mounted() {
    this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  beforeDestroy() {
    console.log('News组件即将被销毁了')
    clearInterval(this.timer)
  }, */
}
</script>