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
    };
  },
  components: {},
};
</script>

<style></style>
