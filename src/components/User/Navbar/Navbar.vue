<template>
  <div class="">
    <Menu />
    <b-sidebar id="sidebar-user" class="" right shadow>
      <div class="px-3 py-2 w-100">
        <router-link to="/perfil" class="link_slider">Perfil</router-link>
        <template v-if="user.role">
          <router-link to="/mis_compras" class="link_slider"
            >Mis compras</router-link
          >
          <router-link to="/mis_favoritos" class="link_slider"
            >Mis favoritos</router-link
          >
        </template>
        <template v-else>
          <router-link to="/categorias" class="link_slider"
            >Categorias</router-link
          >
          <router-link to="/productos" class="link_slider"
            >Productos</router-link
          >
        </template>
        <span class="link_slider" @click="logOut">Cerrar session</span>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
import Menu from "./Menu";
import { mapActions, mapGetters } from "vuex";

import "../../../styles.scss";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      logOut: "user/deleteSession",
    }),
  },
  components: {
    Menu,
  },
  computed: {
    ...mapGetters({
      user: "user/GET_USER",
    }),
  },
};
</script>
