<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 
          路由跳转时携带params参数，to的模板字符串写法
            加上:即js表达式，/xxx/xxx要用模板字符串包裹，其中${}包裹js表达式，
            注意，模板字符串可嵌入表达式，所以:to不能丢:
        -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
          {{ m.title }}
        </router-link> -->

        <!-- 路由跳转时携带query参数，to的对象写法 -->
        <router-link
          :to="{
            name: 'detail', //params传参必须使用name
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        {
          id: '001',
          title: '消息1',
        },
        {
          id: '002',
          title: '消息2',
        },
        {
          id: '003',
          title: '消息3',
        },
      ],
    }
  },
}
</script>