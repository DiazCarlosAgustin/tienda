<template>
  <b-table
    :items="categorias"
    striped
    hover
    class="my-auto"
    :fields="fields"
    responsive
  >
    <template #cell(imagen)="row">
      <img
        :src="`http://localhost:3000/img/categoria/${row.item.imagen}`"
        :alt="row.item.nombre"
        width="90"
      />
    </template>
    <template #cell(acciones)="row">
      <router-link
        class="btn btn-primary mx-1"
        :to="`admin/categoria/${row.item.id}`"
      >
        <b-icon icon="eye" class="text-white" />
      </router-link>
      <router-link
        class="btn btn-success mx-1"
        :to="`admin/editar_categoria/${row.item.id}`"
      >
        <b-icon icon="pen" class="text-white" />
      </router-link>
      <button class="btn btn-danger mx-1" @click="deleteCategoria(row.item.id)">
        <b-icon icon="trash" />
      </button>
    </template>
  </b-table>
</template>

<script>
import axios from "axios";
export default {
  props: ["categorias"],
  data() {
    return {
      fields: [
        { key: "id", sortable: true },
        { key: "imagen", sortable: false },
        { key: "nombre", sortable: true },
        { key: "descripcion", sortable: true },
        { key: "acciones", sortable: false },
      ],
      alert: {
        msg: "",
        variant: "",
        dismissSecs: 5,
        dismissCountDown: 0,
      },
    };
  },
  components: {},
  methods: {
    async deleteCategoria($id) {
      const confirmacion = await this.showMsgBoxTwo();

      if (confirmacion) {
        await axios
          .delete(`http://localhost:3000/categoria/${$id}`)
          .then((result) => {
            if (result.data.status === "OK") {
              this.alert.variant = "success";
              this.alert.msg = result.data.msg;
              this.$eventHub.$emit("showAlert", this.alert);
              this.$eventHub.$emit("deleteCategoria", $id);
            } else {
              this.alert.variant = "danger";
              this.alert.msg = result.data.msg;
              this.$eventHub.$emit("showAlert", this.alert);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    async showMsgBoxTwo() {
      var confirmacion = false;
      await this.$bvModal
        .msgBoxConfirm("¿Esta seguro que quiere eliminar esto?.", {
          title: "Por favor confirmar.",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          confirmacion = value;
        })
        .catch((err) => {
          console.log(err);
        });
      return confirmacion;
    },
  },
};
</script>

<style></style>
