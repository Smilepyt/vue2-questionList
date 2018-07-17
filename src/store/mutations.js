const INITIALIZE_DATA = 'INITIALIZE_DATA';
const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMEMBER_ANSWER = 'REMEMBER_ANSWER';

export default {
  [INITIALIZE_DATA](state, data) {
    state.itemNum = 1;
    state.allTime = 0;
    state.answerid = [];

    state.level = data.level;
    state.itemDetail = data.itemDetail;
  },

  [REMEMBER_ANSWER](state, id) {
    state.answerid.push(id);
  },

  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  }
}