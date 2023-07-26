<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <!-- login 是API用户名 -->
    <!-- html_url 是API主页地址 -->
    <!-- avatar_url 是API头像地址 -->
    <div
      class="card"
      v-show="info.users.length"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>

    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中....</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    <!-- 展示tips -->
    <h3 v-show="!info.users.length">
      Tips：如果没有搜索到用户，建议使用英文字母，不要用其他语言！
    </h3>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      //List会有多种呈现状态
      info: {
        isFirst: true, //默认初次渲染
        isLoading: false,
        errMsg: '',
        users: [],
      },
    }
  },
  mounted() {
    this.$bus.$on('updateListData', (dataObj) => {
      this.info = { ...this.info, ...dataObj }
      //ES6语法三个点两个对象，扩展运算，传入对象身上，没有的属性用本地info，有的直接覆盖（以后者为准）
    })
  },
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>