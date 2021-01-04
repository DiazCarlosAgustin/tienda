<template>
  <div class="container w-100">
    <div class="row mt-3 d-flex justify-content-center">
      <div class="col-12 w-100 text-center">
        <h2>Categorias</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 w-100 text-left">
        <h4>Agregar nueva categoria</h4>
      </div>
    </div>
    <formCategoria />
  </div>
</template>
<script>
import formCategoria from "../../components/Categoria/formCategoria";
export default {
  data() {
    return {};
  },
  components: {
    formCategoria,
  },
};
</script>
