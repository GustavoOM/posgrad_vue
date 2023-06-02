<template>
    <div id="conteudo">
      <FiltrosEBuscas/>
      <FichaIndividualSelecionada nome="Hildebrando Munhoz Rodrigues" data="02/06/2023" curso="BSI" programa="em Vue"/>
      <div id="itens">
        <FichaIndividual :nome="posgrad.Nome" v-for="posgrad in listaPosGrad" :key="posgrad.Ordem"/>
      </div>
    </div>
  </template>
  
  <script>
  import FichaIndividual from '../components/FichaIndividual.vue'
  import FiltrosEBuscas from '../components/FiltrosEBuscas.vue'
  import FichaIndividualSelecionada from '../components/FichaIndividualSelecionada.vue'
  
  export default {
    name: "ListaFichasIndividuais",
    components: {
      FichaIndividual,
      FiltrosEBuscas,
      FichaIndividualSelecionada
    },
    data() {
        return {
            personagem: undefined,
            filter: '',
            personagens: [],
            loading: false,
            cursoSelecionado: "",
            programaSelecionado: "",
            ordemSelecionado: "ANOC",
            busca: "",
        };
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
  #conteudo{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #itens {
    background-color: #597897;
    border-radius: 20px;
    margin: 0px 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    align-items: center;
  }
  @media (max-width: 1000px) {
    #itens{
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 550px) {
    #itens{
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
  </style>
  