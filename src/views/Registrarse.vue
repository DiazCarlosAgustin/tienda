<template>
  <div class="container h-100 w-100 d-flex justify-content-center">
    <div class="row d-flex justify-content-center w-100 mt-5">
      <div class="col-12 col-md-6 col-lg-4 form">
        <b-form @submit.prevent="register">
          <md-field class="form-group">
              <label>Nombre</label>
              <md-input v-model="user.nombre"></md-input>
          </md-field>
          <md-field class="form-group">
              <label>apellido</label>
              <md-input v-model="user.apellido"></md-input>
          </md-field>
          <md-field class="form-group">
              <label>Email</label>
              <md-input v-model="user.email" type="email"></md-input>
          </md-field>
          <md-field class="form-group">
              <label>Telefono</label>
              <md-input v-model="user.telefono" type="number"></md-input>
          </md-field>
          <md-field class="form-group" :md-toggle-password="true">
              <label>Contraseña</label>
              <md-input v-model="user.password" type="password"></md-input>
          </md-field>
          <md-field class="form-group" :md-toggle-password="true">
              <label>Confirmar contraseña</label>
              <md-input v-model="confirmPassword" type="password"></md-input>
          </md-field>
          
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
import '../styles.scss'
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
      confirmPassword:'',
      error: null,
      alert:{
                msg:'',
                variant:'',
                dismissSecs: 5,
                dismissCountDown: 0
            }
    };
  },
  methods: {
    validConfirm(){
      if(this.user.password === this.confirmPassword){
        return true
      }
      else{
        return false
      }
    },
    async register() {
      this.error = null
      if( this.validConfirm() ){
        const res = await axios.post(
          "http://127.0.0.1:3000/user/register",
          this.user
        );
          if(res.data.status != "OK"){
            this.error = res.data.msg
          }
          else{
            this.alert.msg = "Se registro correctamente."
            this.alert.variant = 'success'
            this.$eventHub.$emit('showAlert', this.alert)
            this.$router.replace('/acceder')
          }
      }else{
        this.alert.msg = "Las contraseñas ingresadas deben de ser iguales."
        this.alert.variant = 'danger'
        this.$eventHub.$emit('showAlert', this.alert)
      }
      
    }
  }
};
</script>