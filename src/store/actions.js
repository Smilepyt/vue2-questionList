import axios from 'axios'

export default {
  initializeData({commit}) {
    axios.get('/getTopics').then(function (response) {
      commit('INITIALIZE_DATA', response.data);
    })
  },
  addNum({commit,state}, id) {
    commit('REMEMBER_ANSWER', id);
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1);
    }
  }
}