<template>
  <div>
    <div class="row">
      <Banner />
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link标签实现路由的切换，active-class支持聚焦高亮 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/about"
          >
            About
          </router-link>
          <router-link class="list-group-item" active-class="active" to="/home">
            Home
          </router-link>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定路由组件的呈现位置（类似路由组件的插槽） -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
  0.使用路由用<router-link></router-link>，指定路由组件显示用<router-view></router-view>
  1.app只需要注册一般组件；About、Home这种路由组件当做页面等待配置，放在pages里
  2.没启动的路由组件默认会销毁掉，需要才挂载
  3.每个组件都有自己的$route，存自己的路由信息；所有组件共用一个$router
*/
import Banner from './components/Banner'
export default {
  name: 'App',
  components: { Banner },
  mounted() {},
}
</script>
