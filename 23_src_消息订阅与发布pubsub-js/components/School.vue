<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js"; //备注：某些依赖包只能本地安装，全局安装反而会报错

export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    //订阅，回调函数的参数前为消息，后是接收的参数
    this.pubId = pubsub.subscribe("hello", (msg, data) => {
      console.log(this);
      console.log("有人发布了hello消息，hello消息的回调被执行", msg, data);
    });

    /* console.log("School访问总线", this.$bus); */
    /* this.$bus.$on("hello", (data) => {
      console.log("我是School组件，收到了数据", data);
    }); */
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId); //取消订阅，接收的参数为pubId

    //this.$bus.$off("hello"); //vm/vc里的$bus是一直在的，需要清理事件
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>