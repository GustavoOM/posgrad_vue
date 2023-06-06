<template>
  <ListaFichasIndividuais :listaPosGrad="alunosPosGraduacao"/>
</template>

<script>
  import axios from 'axios';

  import ListaFichasIndividuais from '../components/ListaFichasIndividuais.vue'


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
      ListaFichasIndividuais
    },
    methods: {
      async carregarAlunosPosGraduacao() {
        const url = 'http://thanos.icmc.usp.br:4567/api/v1/defesas';

        try {
          const response = await axios.get(url);
          this.alunosPosGraduacao = response.data.items;
          this.hs = response.data.hs;
        } catch (error) {
          console.error(error);
        }
      }
    },
    mounted() {
      this.carregarAlunosPosGraduacao();
    }
  }
</script>
