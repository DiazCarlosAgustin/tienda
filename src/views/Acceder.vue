<template>
  <div class="container h-100 w-100 d-flex justify-content-center">
    <div class="row d-flex justify-content-center w-100 mt-5">
      <div class="col-12 col-md-6 col-lg-4 form">
        <b-form @submit.prevent="login">
          <md-field class="form-group">
            <label>Email</label>
            <md-input v-model="user.email"></md-input>
          </md-field>
          <md-field class="form-group" :md-toggle-password="true">
            <label>Contraseña</label>
            <md-input v-model="user.password" type="password"></md-input>
          </md-field>
          <b-form-group>
            <router-link to="/olvide_mi_clave"
              >Olvide mi contraseña</router-link
            >
          </b-form-group>
          <b-form-group class="w-100 text-center">
            <router-link
              class="btn btn-light w-100 btn-md btn-link"
              to="/registrarse"
              >No tengo una cuenta</router-link
            >
          </b-form-group>
          <b-form-group class="w-100 text-center">
            <b-button type="submit" class="btn btn-md w-100 _btn-dark"
              >Aceptar</b-button
            >
          </b-form-group>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import "../styles.scss";

import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      alert: {
        msg: "",
        variant: "",
        dismissSecs: 5,
        dismissCountDown: 0,
      },
    };
  },
  methods: {
    ...mapMutations({
      SET_TOKEN: "user/SET_TOKEN",
      SET_USER: "user/SET_USER",
    }),
    ...mapActions({
      getUser: "user/getUser",
      newAlert: "alert/newAlert",
    }),
    async login() {
      const res = await axios.post(
        "http://127.0.0.1:3000/auth/login",
        this.user
      );
      if (res.data.token) {
        this.alert.msg = res.data.msg;
        this.alert.variant = "success";
        this.$eventHub.$emit("showAlert", this.alert);
        this.SET_TOKEN(res.data.token);
        this.SET_USER(res.data.user);
        this.getUser();
        this.$router.replace("/");
      } else if (res.data.error) {
        this.alert.msg = res.data.error;
        this.alert.variant = "danger";
        this.$eventHub.$emit("showAlert", this.alert);
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
