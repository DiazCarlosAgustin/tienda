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
    <div class="row my-5">
      <div class="col-12  d-flex justify-content-center">
        <tablaCategorias :categorias="categorias" />
      </div>
    </div>
  </div>
</template>
<script>
import formCategoria from "../../components/Categoria/formCategoria";
import tablaCategorias from "../../components/Categoria/tablaCategorias";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.$eventHub.$on("newCategoria", ($categoria) => {
      this.categorias.push($categoria);
    });
    this.$eventHub.$on("deleteCategoria", ($id) => {
      this.categorias.splice(
        this.categorias.findIndex((cat) => cat.id === $id),
        1
      );
    });
  },
  beforeMount() {
    this.$store.dispatch("categoria/getCategorias");
  },
  components: {
    formCategoria,
    tablaCategorias,
  },
  methods: {},
  computed: {
    ...mapGetters({
      categorias: "categoria/get_categoria",
    }),
  },
};
</script>
