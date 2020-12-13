import Vue from "vue";
import Vuex from "vuex";
import user from "../models/User";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: user.user,
  },
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});
