//引入axios
import axios from 'axios'
//引入nanoid
import { nanoid } from 'nanoid'

export default {
    namespaced: true,
    actions: {
        addPersonLee(context, personObj) {
            console.log('personAbout/actions中的addPersonLee被调用了')
            if (personObj.name.indexOf('李') === 0) { //首个索引就是姓
                context.commit('ADD_PERSON', personObj)
            } else {
                alert('添加人必须姓李')
            }
        },
        addPersonApi(context) {
            console.log('personAbout/actions中的addPersonApi被调用了')
            axios.get('http://api.kekc.cn/api/wawr').then(
                (response) => {
                    context.commit('ADD_PERSON', { //response的data值只是name，还需要包装成对象
                        id: nanoid(), name: response.data
                    })
                },
                (error) => {
                    alert(error.message)
                },
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            console.log('personAbout/mutations中的ADD_PERSON被调用了')
            state.personList.unshift(personObj) //放在开头
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' },
            { id: '002', name: '李斯' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}