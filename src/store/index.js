import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  level: '', //活动周数
  itemNum: 1, // 第几题
  allTime: 0, //总共用时
  timer: '', //定时器
  itemDetail: [],
  answerid: []
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})