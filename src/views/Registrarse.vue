<template>
  <div class="container h-100 w-100 d-flex justify-content-center">
    <div class="row d-flex justify-content-center w-100 mt-5">
      <div class="col-12 col-md-6 col-lg-4">
        <b-form @submit.prevent="register">
          <b-form-group id="labelNombre" label="Nombre" label-for="Nombre">
            <b-form-input
              id="Nombre"
              v-model="user.nombre"
              type="text"
              required
              placeholder="Apellido"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="labelApellido"
            label="Apellido"
            label-for="Apellido"
          >
            <b-form-input
              id="Apellido"
              v-model="user.apellido"
              type="text"
              required
              placeholder="Apellido"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="labelEmail" label="Email" label-for="Email">
            <b-form-input
              id="Email"
              v-model="user.email"
              type="email"
              required
              placeholder="Email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="labelTelefono"
            label="Telefono"
            label-for="Telefono"
          >
            <b-form-input
              id="Telefono"
              v-model="user.telefono"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="labelPassword"
            label="Password"
            label-for="Password"
          >
            <b-form-input
              id="Password"
              v-model="user.password"
              type="password"
              required
              placeholder="Password"
            ></b-form-input>
          </b-form-group>
          <b-form-group v-if="error">
            <p class="alert alert-danger">{{error}}</p>
          </b-form-group>
            <b-form-group class="w-100 text-center"> 
                <router-link class="btn btn-light w-100 btn-md"  to="/acceder">Ya tengo una cuenta</router-link>
            </b-form-group>
            <b-form-group class="w-100 text-center">
                <b-button type="submit" class="btn btn-md w-100"  variant="primary">Aceptar</b-button>
            </b-form-group>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        nombre: "",
        apellido: "",
        telefono: 0,
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    async register() {
      this.error = null
      const res = await axios.post(
        "http://127.0.0.1:3000/user/register",
        this.user
      );
      if(res.data.status === "OK"){
        this.error = res.data.msg
      }
      else{
        this.$router.redirect("/login")
      }
    }
  }
};
</script>