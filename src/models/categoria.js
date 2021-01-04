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
    set_categoria(state, params) {
      state.categorias = params;
    },
  },
  actions: {
    async getCategorias({ commit }) {
      await axios
        .get("http://localhost:3000/categoria")
        .then((res) => {
          if (res.data.status === "OK") {
            commit("set_categorias", res.data.categorias);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
