<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <div>
      <b-alert
        :show="alert.dismissCountDown"
        dismissible
        :variant="alert.variant"
        @dismissed="alert.dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        {{alert.msg}}
      </b-alert>
    </div>
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
let bus = new Vue
import Navbar from './components/User/Navbar/Navbar'
export default {
  data() {
    return {
      alert:{}
    }
  },
  components:{
    Navbar
  },
  methods: {
    countDownChanged(dismissCountDown) {
        this.alert.dismissCountDown = dismissCountDown
      },
  },
  created() {
    bus.$on('showAlert', params => {
      alert(params)
      this.alert = params
    })
  },
}
</script>
<style>
body{
  background-color: #eeeef0 !important;
}
</style>
