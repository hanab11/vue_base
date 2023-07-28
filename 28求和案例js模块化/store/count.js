export default {
    namespaced: true,
    //准备actions——用于 响应 组件中的动作
    actions: {
        jiaOdd(context, value) {
            console.log('countAbout/actions中的jiaOdd被调用了')
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            console.log('countAbout/actions中的jiaWait被调用了')
            setTimeout(() => {
                context.commit('JIA', value)
            }, 1000)
        }
    },
    //准备mutations——用于操作数据
    mutations: {
        JIA(state, value) {
            console.log('countAbout/mutations中的JIA被调用了', state, value)
            state.sum += value
        },
        JIAN(state, value) {
            console.log('countAbout/mutations中的JIAN被调用了')
            state.sum -= value
        }
    },
    //准备state——用于存储数据
    state: {
        sum: 0, //当前的和
        school: '硅谷',
        subject: '前端',
    },
    //准备getters——用于加工数据，写法等同计算属性
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}