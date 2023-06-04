<template>
  <Cabecalho/>
  <router-view/>
  <Rodape/>
</template>

<script>
import Cabecalho from './components/Cabecalho.vue';
import Rodape from './components/Rodape.vue';


  export default{
    name: "app",
    components: { Cabecalho, Rodape }
}
</script>

<style>
  body{
    margin: 0;
    background-color: #597897;
  }
</style>