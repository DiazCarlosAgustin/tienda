import axios from "axios";
import cookies from "vue-cookies";

export default {
  namespaced: true,
  state: {
    user: null,
    auth: false,
  },
  getters: {
    GET_USER(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, params) {
      state.user = params;
      state.auth = Boolean(state.user);
    },
    SET_TOKEN(state, token) {
      cookies.set("usertoken", token, "7d");
    },
  },
  actions: {
    async getUser({ commit }) {
      await axios
        .get("http://127.0.0.1:3000/user/main", {
          headers: {
            usertoken: cookies.get("usertoken"),
          },
        })
        .then((res) => {
          if (res.data.user != null) {
            commit("SET_USER", res.data.user);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteSession({ commit }) {
      cookies.remove("usertoken", "localhost");
      commit("SET_USER", null);
      window.location.href = "/";
    },
    async updateUser(params) {
      const user = params.state.user;
      const result = await axios.put(
        `http://127.0.0.1:3000/user/${user.id}`,
        user,
        {
          headers: { usertoken: cookies.get("usertoken") },
        }
      );
      return result;
    },
  },
};
