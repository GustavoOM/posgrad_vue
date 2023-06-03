<template>
    <div id="conteudo">
      <FiltrosEBuscas/>
      <div id="itens">
        <FichaIndividual :nome="posgrad.Nome" v-for="(posgrad, index) in listaPosGrad" :key="index"/>
      </div>
    </div>
  </template>
  
  <script>
  import FichaIndividual from '../components/FichaIndividual.vue'
  import FiltrosEBuscas from '../components/FiltrosEBuscas.vue'
  
  export default {
    name: "ListaFichasIndividuais",
    components: {
      FichaIndividual,
      FiltrosEBuscas
    },
    props: {
      listaPosGrad: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  #itens {
    background-color: #597897;
    border-radius: 20px;
    margin: 50px 20px 68px 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    align-items: center;
  }
  </style>
  