import axios from "axios";

export default {
  namespaced: true,
  state: {
    categorias: null,
  },
  getters: {
    get_categoria(state) {
      return state.categorias;
    },
  },
  mutations: {
    SET_CATEGORIA(state, params) {
      if (params) {
        state.categorias = params;
      }
    },
  },
  actions: {
    async getCategorias({ commit }) {
      await axios
        .get("http://localhost:3000/categoria")
        .then((res) => {
          console.log(res);
          if (res.data.status === "OK") {
            commit("SET_CATEGORIA", res.data.categorias);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
