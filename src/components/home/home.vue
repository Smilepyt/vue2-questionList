<template>
  <div>
    <header>
      <span>{{level}}</span>
    </header>
    <div>
      <router-link to="item">
        <button>开始答题</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex';
  export default {
    computed: mapState([
      'level'
    ]),
    methods: {
      ...mapActions([
        'initializeData'
      ])
    },
    created() {
      this.initializeData();
    },
  }
</script>

<style>
</style>
