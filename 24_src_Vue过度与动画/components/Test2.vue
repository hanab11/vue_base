<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 有多个元素，用transition-group标签，必须要有key  -->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">尚硅谷！</h1>
      <h1 v-show="!isShow" key="2">你好啊！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

/* 6个vue的关键样式，用transition标签 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear; /* transition过度 */
}
/* 进入的起点、离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/* 进入的终点、离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>