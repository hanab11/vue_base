const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true, //兼容ie
  lintOnSave: false, //es语法检查关闭（否则会要求子组件名称为非单个的单词）

  //开启8080端口代理服务器并且 转发至目标端口8000（方式一）
  /* devServer: {
    //缺点：只能转发一个代理、不能灵活控制到底走不走代理（优先匹配本地资源，找不到才转发）
    proxy: "http://localhost:8000",
  }, */
  //开启8080端口代理服务器（方式二）
  devServer: {
    //缺点：请求资源时要加/前缀
    proxy: {
      '/demo1': {
        target: 'http://localhost:8000',
        pathRewrite: { '^/demo1': '' },  //重写
        /* ws: true, //支持websocket*/
        changeOrigin: false //缺省为true，用于控制请求头的host值，简而言之是否伪装端口号
      },
      '/demo2': {
        target: 'http://localhost:8001',
        pathRewrite: { '^/demo2': '' },  //重写
        /* ws: true, 
        changeOrigin: true */
      },
    }
  }
});
