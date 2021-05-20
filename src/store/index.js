import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartInfo: [],
    newCartCount: 0,
  },
  mutations: {
    addCartInfo(state, payload) {
      state.cartInfo.push(payload)
      state.newCartCount++
    },
    isSelected(state, index) {
      // console.log(index);
      state.cartInfo[index].selected = !state.cartInfo[index].selected
    },
    updateNewCartCount(state) {
      state.newCartCount = 0
    },
    minus(state, index) {
      state.cartInfo[index].count --
    },
    plus(state, index) {
      state.cartInfo[index].count ++
    },
    nums(state, payload) {
      if(payload.value>= 1000) {
        state.cartInfo[payload.index].count = 999
      } else if (payload.value < 1) {
        state.cartInfo[payload.index].count = 1
      } else {
        state.cartInfo[payload.index].count = payload.value
      }
    },
    // 改变全选状态
    changeSelectAll(state) {
      let i = !this.getters.selectedAll
      state.cartInfo.forEach( item => {
        item.selected = i
      })
    }
  },
  getters: {
    t_price(state){
      return (state.cartInfo.filter( item => {
        return item.selected
      }).reduce((p,v) => {
        return p + v.selectPrice * v.count
      },0) /100).toFixed(2)
    },
    tarr(state) {
      return state.cartInfo.filter( item => {
        return item.selected
      })
    },
    selectedAll(state){
      return !state.cartInfo.some( item => {
        return !item.selected
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
