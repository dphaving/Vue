import axios from 'axios'
//state 是用与存放数据的
const state = {
    orderList: [],
    params: {}
}

//getter是用与调用state里面的值的，只有在这里才能调用state中数据，其他不行
const getters = {
    //每个方法都需要传入一个state,这样就能调用state的值
    // orderList: function(state){
    //     return state.orderList
    // }
    //es6简写
    getOrderList: state => state.orderList
}

//这里执行异步的操作
const actions = {
        fetchOrderList(commit, state) {
            axios.post('/api/getOrderList', state.params)
                .then((response) => {
                    commit('updateOrderList', response.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    //这里执行同步的操作
const mutations = {
    updateOrderList(state, payload) {
        state.orderList = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}