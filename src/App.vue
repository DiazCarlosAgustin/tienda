<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <div class="w-100">
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
import Navbar from './components/User/Navbar/Navbar'
export default {
  data() {
    return {
      alert:{
        msg:'',
        variant:'',
        dismissSecs: 5,
        dismissCountDown: 0
      }
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
    console.log("as")
    this.$eventHub.$on('showAlert', (params) => {
      console.log(params)
      this.alert = params
      this.alert.dismissCountDown = this.alert.dismissSecs
    })
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');
h1, h2, h3, h4, h5 ,h6{
  font-family: 'Roboto', sans-serif;
}
body{
  background-color: whitesmoke !important;
  font-family: 'Open Sans', sans-serif;
}
</style>
