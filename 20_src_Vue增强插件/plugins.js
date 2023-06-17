export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4);
        })

        //自定义全局指令
        Vue.directive('fbind', {
            //指令与DOM元素(标签)成功绑定时（初次）
            bind(element, binding) {
                console.log('1st.bind()');
                element.value = binding.value;
            },
            //指令所在的DOM元素(标签)被插入页面时（一般执行一次）
            inserted(element, binding) {
                console.log('2nd.inserted()');
                element.focus();
            },
            //指令所在模板div重新解析时（一般会多次执行）
            update(element, binding) {
                console.log('3rd.update()');
                element.value = binding.value;
                element.focus();
            }
        })

        //配置全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        //给Vue原型上添加方法（vm和vc上都能使用）
        Vue.prototype.hello = () => {
            alert('你好（Vue原型上添加方法）')
        }
    }
}
