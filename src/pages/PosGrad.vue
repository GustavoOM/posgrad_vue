<template>
  <div id="pagina">
    <Cabecalho/>
    <ListaFichasIndividuais :listaPosGrad="alunosPosGraduacao"/>
    <Rodape/>
  </div>
</template>

<script>

  import Cabecalho from '../components/Cabecalho.vue'
  import ListaFichasIndividuais from '../components/ListaFichasIndividuais.vue'
  import Rodape from '../components/Rodape.vue'

  export default {
    name: 'PosGrad',
    data() {
      return {
        alunoAtivo: undefined,
        filter: '',
        alunosPosGraduacao: [],
        hs: []
      };
    },
    components: {
      Cabecalho,
      ListaFichasIndividuais,
      Rodape
    },
    methods: {
      carregarAlunosPosGraduacao() {
        const url = 'http://thanos.icmc.usp.br:4567/api/v1/defesas';
        fetch(url)
          .then((data) => data.json())
          .then((response) => {
            this.alunosPosGraduacao = response.items
            this.hs = response.hs; 
            //console.log("DADOS")
            //console.log(this.alunosPosGraduacao)
            //console.log("ITENS")
            //console.log(this.hs)
          });
      },
    },
    mounted() {
      this.carregarAlunosPosGraduacao();
    }
  }
</script>


<style scoped>
  #pagina {
    background-color: #597897;
    font-size: 16px;
    margin: 0;
  }
</style>