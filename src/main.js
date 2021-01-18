import Vue from "vue";
import vueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.silent = true;

Vue.use(vueCookies);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueMaterial);

Vue.$cookies.config("7d");
Vue.prototype.$eventHub = new Vue();

router.beforeEach(async (to, from, next) => {
  let auth = null;
  await store.dispatch("user/getUser");
  auth = store.state.user.auth;
  var role = true;
  if (store.state.user.user?.role != null) {
    role = store.state.user.user.role;
  }

  if (to.matched.some((route) => route.meta.requireAuth)) {
    if (auth) {
      next();
    } else {
      next("/acceder");
    }
  } else if (to.matched.some((route) => route.meta.noRequireAuth)) {
    if (!auth) {
      next();
    } else {
      next("/");
    }
  } else if (to.matched.some((route) => route.meta.requireAuthAdmin)) {
    if (!role) {
      //cambiar esto cuando termine de probar
      next();
    } else {
      next("/");
    }
  }
  next();
});

new Vue({
  beforeCreate() {
    this.$store.dispatch("user/getUser");
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
