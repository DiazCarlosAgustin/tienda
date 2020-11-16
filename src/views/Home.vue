<template>
  <div class="home">
    <div class="fondo">
      <div class="content">
        <div class="titulo">
          <h1>!Shop</h1>
        </div>
        <div class="sub_titulo">
          <h3>
          Encontra lo que estas buscando
          </h3>
        </div>
      </div>
    </div>
    <div class="categorias container mx-auto my-3">
      <div class="titulo__section">
        Categorias
      </div>
      <div class="row d-flex justify-content-center w-100 mx-auto">
        <categoria v-for="dat in data" :key="dat" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import categoria from '../components/Others/categoria'
export default {
  name: "Home",
  data() {
    return {
      data: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  components:{
    categoria
  }
};
</script>
<style scoped>
.titulo__section{
  font-size: 2.5rem;
  text-align: center;

}
.fondo{
  width: 100%;
  height: 91vh;
  background-image: url('../assets/Fondo.jpg');
  background-origin: border-box;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.titulo, .sub_titulo{
  display: block;
  width: 100%;
  text-align: center;
  color:white;
}
.titulo h1{
  font-size: 5.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.sub_titulo{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
