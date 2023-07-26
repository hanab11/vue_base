<template>
  <!-- 第三方样式可以不import引入，直接放在html里，public/css/bootstrap -->
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the Githuber name"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    searchUsers() {
      //请求响应前，更新List的数据（此时状态是按下按钮正在加载）
      this.$bus.$emit('updateListData', {
        isFirst: false,
        isLoading: true,
        errMsg: '',
        users: [],
      })
      //使用模板字符串和${}带表达式带数据，免费的API在后端就已经解决掉跨域
      //vueResource的$http和axios用法上完全一样
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then(
          (response) => {
            console.log('请求成功了', response.data)
            //请求响应成功后，更新List数据，谁传数据谁触发
            this.$bus.$emit('updateListData', {
              isLoading: false,
              errMsg: '',
              users: response.data.items,
            })
          },
          (error) => {
            //请求响应失败后
            this.$bus.$emit('updateListData', {
              isLoading: false,
              errMsg: error.message,
              users: [],
            })
          }
        )
    },
  },
}
</script>
