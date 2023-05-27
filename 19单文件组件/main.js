//直接管理App组件
import App from './App.vue'

new Vue({
    //root根容器必须写在html里
    template: `
        <App></App>
    `, //template+文本字符串 默认替换掉html中容器内的内容
    el: '#root',
    components: {
        App,
    }
})
