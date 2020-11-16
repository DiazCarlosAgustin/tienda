import Vue from "vue";
import vueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(vueCookies);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.$cookies.config("7d");

new Vue({
  mounted() {
    this.$store.dispatch("user/getUser")
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
