<template>
  <div class="row d-flex justify-content-center mt-2">
    <div class="col-12 col-md-6 col-lg-6 w-100">
      <b-form
        class="form"
        enctype="multipart/form-data"
        @submit.prevent="submitCategoria"
      >
        <md-field class="form-group">
          <label>Nombre</label>
          <md-input name="nombre" v-model="categoria.nombre"></md-input>
        </md-field>
        <md-field class="form-group">
          <b-form-file
            type="file"
            name="file"
            ref="file"
            accept="image/*"
            @change="takeFile"
            plain
          />
        </md-field>

        <md-field class="form-group">
          <label>descripcion</label>
          <md-textarea
            name="descripcion"
            v-model="categoria.descripcion"
          ></md-textarea>
        </md-field>
        <b-form-group class="w-100 text-center">
          <b-button type="submit" class="btn btn-md w-100 _btn-dark"
            >Aceptar</b-button
          >
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      file: "",
      categoria: {
        nombre: "",
        descripcion: "",
        imagen: {},
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
    takeFile(e) {
      console.log(e.target.files);
      this.categoria.imagen = e.target.files[0];
      console.log(this.categoria.imagen);
    },
    submitCategoria() {
      const formData = new FormData();
      formData.append("file", this.categoria.imagen);
      formData.append("nombre", this.categoria.nombre);
      formData.append("descripcion", this.categoria.descripcion);
      try {
        axios
          .post("http://localhost:3000/categoria/", formData)
          .then((res) => {
            if (res.data.status === "OK") {
              this.alert.msg = res.data.msg;
              this.alert.variant = "success";
              this.$eventHub.$emit("showAlert", this.alert);
            } else {
              this.alert.msg = res.data.msg;
              this.alert.variant = "danger";
              this.$eventHub.$emit("showAlert", this.alert);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
