//默认暴露只能对表达式、函数、单个对象
//多行暴露时，引入需要使用{}包住
export const mixin1 = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
}

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    }
}
