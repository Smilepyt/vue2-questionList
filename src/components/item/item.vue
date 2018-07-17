<template>
  <div>
    <header>
      <span>第{{itemNum}}题</span>
    </header>
    <div>
      <header>{{itemDetail[itemNum-1].topic_name}}</header>
      <ul>
        <li v-for="(answer, index) in itemDetail[itemNum-1].topic_answer" @click="choose(index,answer.topic_answer_id)">
          <span :class="{'ischoose' : index === choosedNum}">{{chooseType(index)}}</span>
          <span>{{answer.answer_name}}</span>
        </li>
      </ul>
    </div>
    <button @click="nextItem" v-if="itemNum < itemDetail.length">下一题</button>
    <button v-else @click="submit">提交</button>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex'
  export default {
    name: 'item',
    data() {
      return {
        itemId: null,
        choosedId: null,
        choosedNum: null
      }
    },
    computed: mapState([
      'itemNum',
      'itemDetail'
    ]),
    methods: {
      ...mapActions([
        'addNum'
      ]),
      chooseType(type) {
        switch (type) {
          case 0:
            return 'A';
          case 1:
            return 'B';
          case 2:
            return 'C';
          case 3:
            return 'D';
        }
      },
      choose(type, id) {
        this.choosedNum = type;
        this.choosedId = id;
      },
      nextItem() {
        if (this.choosedNum !== null) {
          this.choosedNum = null;
          this.addNum(this.choosedId);
        } else {
          alert('您还没有选择答案哦');
        }
      },
      submit() {
        if (this.choosedNum !== null) {
          this.addNum(this.choosedId);
          this.$router.push('score');
        } else {
          alert('您还没有选择答案哦');
        }
      }
    }
  }
</script>

<style>
.ischoose {
  color: brown
}
</style>
