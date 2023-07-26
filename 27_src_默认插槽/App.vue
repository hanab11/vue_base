<template>
  <div class="container">
    <!-- 非自闭合组件标签 的标签体会放到slot插槽中 -->
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="foods" />
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: { Category },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》'],
    }
  },
}
</script>

<style scoped>
.container {
  display: flex; /* 弹性 布局 */
  justify-content: space-around; /* 均匀排列并分配相同空间 */
}
</style>
