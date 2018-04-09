import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: []
  },
  mutations: {
  	init: (state, order) => {
      state.orderList = order
    },
    inc: (state, order) => {
    	var index = _.findIndex(state.orderList, function(o) { 
	        return o.id == order.id
	    });

	    if(index != -1){
	    	var num = state.orderList[index].num
	        num ? state.orderList[index].num++ : state.orderList[index].num = 1
	    }
      //处理vue无法检测利用索引设置数组的值变化
      //https://cn.vuejs.org/v2/guide/list.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9
      state.orderList = _.filter(state.orderList, function() { return true })
    },
    dec: (state, order) => {
    	var index = _.findIndex(state.orderList, function(o) { 
	      return o.id == order.id
	    });

	    if(index != -1){
	      state.orderList[index].num--
	    }
      state.orderList = _.filter(state.orderList, function() { return true })
    },
    clear: (state) => {
    	var list = [];
    	_.forEach(state.orderList, function(val) {
    	  if(val.num) val.num = 0
  		  list.push(val)
  		});

  		state.orderList = list
    },
  },
  getters: {
    cartList: state => {
      return _.filter(state.orderList, 'num')
    },
    totalNum: state => {
      var total = 0
      _.forEach(state.orderList, function(val) {
        if(val.num) total += val.num
      });

      return total
    },
    totalFee: state => {
      var total = 0
      _.forEach(state.orderList, function(val) {
        if(val.num) total += val.price*val.num
      });

      return total
    },
    detailData: (state) => (id) => {
      return _.find(state.orderList, function(o) { return o.id == id })
    },
  }
})