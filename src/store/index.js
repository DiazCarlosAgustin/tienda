import Vue from "vue";
import Vuex from "vuex";
import user from "../models/User";
import categoria from "../models/categoria";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: user.user,
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    categoria,
  },
});
