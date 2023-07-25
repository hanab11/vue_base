<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 用transition标签包裹，显示：appear缺省为true -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
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

/* enter-active和leave-active是vue动画样式的类名，默认v-，可自己绑定名字 */
.hello-enter-active {
  animation: atguigu 0.5s linear; /* 匀速 */
}

.hello-leave-active {
  animation: atguigu 0.5s linear reverse; /* 匀速，反转 */
}

/* 动画写法：关键帧，使用animation: name调用 */
@keyframes atguigu {
  from {
    transform: translateX(-100%); /* 移动，X横轴 */
  }
  to {
    transform: translateX(0px); /* 0px为页面最右侧 */
  }
}
</style>