import axios from 'axios'

export default {
  //初始化数据，通过axios和mock.js获取模拟数据
  initializeData({commit}) {
    axios.get('/getTopics').then(function (response) {
      commit('INITIALIZE_DATA', response.data);
    })
  },
  //点击下一题，记录答案id,判断是否为最后一题，如果不是题号+1
  addNum({commit,state}, id) {
    commit('REMEMBER_ANSWER', id);
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1);
    }
  }
}