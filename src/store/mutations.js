const INITIALIZE_DATA = 'INITIALIZE_DATA';
const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMEMBER_ANSWER = 'REMEMBER_ANSWER';

export default {
  //初始化数据
  [INITIALIZE_DATA](state, data) {
    state.itemNum = 1;    //当前题号
    state.allTime = 0;    //初始时间
    state.answerid = [];  //答案数组

    state.level = data.level;
    state.itemDetail = data.itemDetail;
  },
  //记录答案，答案id唯一
  [REMEMBER_ANSWER](state, id) {
    state.answerid.push(id);
  },
  //点击进入下一题
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  }
}