<template>
  <div>
    <div>
      <h2>学生姓名：{{ name }}</h2>
      <h2>学生年龄：{{ age }}</h2>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "School",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {},
};
</script>
    
<style>
</style>
