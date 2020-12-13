<template>
  <div class="container w-100">
    <div class="row mt-3 d-flex justify-content-center">
      <div class="col-12 w-100 text-center">
        <h2>Mi perfil</h2>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
        <div class="container-data-user my-2">
          <div class="text-center"><h4>Mis datos</h4></div>
          <form @submit.prevent="updateDataUser">
            <md-field class="form-group">
              <label>Nombre</label>
              <md-input
                @change="validateChangeInFormDataUser"
                v-model="user.nombre"
              ></md-input>
            </md-field>
            <md-field class="form-group">
              <label>Apellido</label>
              <md-input
                @change="validateChangeInFormDataUser"
                v-model="user.apellido"
              ></md-input>
            </md-field>
            <md-field class="form-group">
              <label>Email</label>
              <md-input
                @change="validateChangeInFormDataUser"
                v-model="user.email"
                type="email"
              ></md-input>
            </md-field>
            <md-field class="form-group">
              <label>Telefono</label>
              <md-input
                @change="validateChangeInFormDataUser"
                v-model="user.telefono"
              ></md-input>
            </md-field>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-dark w-100"
                :disabled="!change"
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
        <div class="container-data-user my-2">
          <div class="text-center"><h4>Cambiar contraseña</h4></div>
          <form @submit.prevent="chagePassword">
            <md-field class="form-group">
              <label>Contraseña actual</label>
              <md-input v-model="newPassword.actual" type="password"></md-input>
            </md-field>
            <md-field class="form-group">
              <label>Nueva contraseña</label>
              <md-input v-model="newPassword.nueva" type="password"></md-input>
            </md-field>
            <md-field class="form-group">
              <label>Validar contraseña</label>
              <md-input
                v-model="newPassword.nuevaValidada"
                type="password"
              ></md-input>
            </md-field>
            <div class="form-group">
              <button type="submit" class="btn btn-dark w-100">Aceptar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newPassword: {
        nuevaValidada: null,
        actual: null,
        nueva: null,
      },
      user: [],
      alert: {
        msg: "",
        variant: "",
        dismissSecs: 5,
        dismissCountDown: 0,
      },
      change: false,
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      updateUser: "user/updateUser",
    }),
    getUser() {
      this.user = this.$store.getters["user/GET_USER"];
      console.log(this.user);
    },
    updateDataUser() {
      this.updateUser(this.user).then((res) => {
        console.log(res);
        if (res.data.status === "OK") {
          this.alert.msg = res.data.msg;
          this.alert.variant = "success";
        } else {
          this.alert.msg = res.data.msg;
          this.alert.variant = "danger";
        }
        this.$eventHub.$emit("showAlert", this.alert);
        this.change = false;
      });
    },
    validateChangeInFormDataUser() {
      this.change = true;
      console.log(this.change);
    },
  },
  created() {
    this.getUser();
  },
};
</script>
<style lang="scss" scoped>
.container-data-user {
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
}
</style>
