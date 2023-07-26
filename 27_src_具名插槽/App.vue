<template>
  <div class="container">
    <!-- 非自闭合组件标签 的标签体会放到slot插槽中 -->
    <Category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt="foods"
      />
      <a slot="footer" href="" class="footer">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div slot="footer" class="footer">
        <a href="">单机游戏</a>
        <a href="">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video
        controls
        slot="center"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- 当使用template标签时，可用v-slot指定具名插槽 -->
      <template v-slot:footer>
        <div class="footer">
          <a href="">国产</a>
          <a href="">日韩</a>
          <a href="">欧美</a>
        </div>
        <h4>欢迎观影</h4>
      </template>
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
.container,
.footer {
  display: flex; /* 弹性 布局 */
  justify-content: space-around; /* 均匀排列并分配相同空间 */
}
h4 {
  text-align: center;
}
</style>
