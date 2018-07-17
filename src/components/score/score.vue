<template>
  <div>
    <header>
      <span>{{score}}分</span>
    </header>
    <div>{{scoreTips}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'score',
    data() {
      return {
        score: 0,
        scoreTips: '',
        rightAnswer: [2, 7, 12, 13, 18], //正确答案 
        scoreTipsArr: ['你说，是不是把知识都还给小学老师了？', '还不错，但还需要继续加油哦！',
          '不要嘚瑟还有进步的空间！', '智商离爆表只差一步了！', '你也太聪明啦，卡戴珊家族欢迎你！'
        ]
      }
    },
    computed: mapState([
      'answerid'
    ]),
    methods: {
      computeScore() {
        this.answerid.forEach((item, index) => {
          if (item === this.rightAnswer[index]) {
            this.score += 20;
          }
        })
      },
      getScoreTips() {
        if (this.score <= 20) {
          this.scoreTips = this.scoreTipsArr[0];
          return
        }
        if (this.score <= 40) {
          this.scoreTips = t
          his.scoreTipsArr[1];
          return
        }
        if (this.score <= 60) {
          this.scoreTips = this.scoreTipsArr[2];
          return
        }
        if (this.score <= 80) {
          this.scoreTips = this.scoreTipsArr[3];
          return
        }
        if (this.score <= 100) {
          this.scoreTips = this.scoreTipsArr[4];
        }
      }
    },
    created() {
      this.computeScore();
      this.getScoreTips(); 
    }
  }
</script>

<style>
</style>
