import Vue from "vue";
import vueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(vueCookies);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueMaterial);

Vue.$cookies.config("7d");
Vue.prototype.$eventHub = new Vue();
sync(store, router);

new Vue({
  beforeCreate() {
    this.$store.dispatch("user/getUser");
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
