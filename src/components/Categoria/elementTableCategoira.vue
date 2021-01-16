<template>
  <tr>
    <td scope="col">
      <span>{{ categoria.id }}</span>
    </td>
    <td scope="col">
      <img
        :src="`http://localhost:3000/img/categoria/${categoria.imagen}`"
        :alt="categoria.nombre"
        width="90"
      />
    </td>
    <td scope="col">
      <span>{{ categoria.nombre }} </span>
    </td>
    <td scope="col">
      <span>{{ categoria.descripcion }} </span>
    </td>
    <td scope="col">
      <button class="btn btn-danger">
        <b-icon icon="trash" />
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["categoria"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.categoria);
  },
};
</script>
