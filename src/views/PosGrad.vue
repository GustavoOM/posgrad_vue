<template>
  <ListaFichasIndividuais :listaPosGrad="alunosPosGraduacao"/>
</template>

<script>
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
      carregarAlunosPosGraduacao() {
        const url = 'http://thanos.icmc.usp.br:4567/api/v1/defesas';
        fetch(url)
          .then((data) => data.json())
          .then((response) => {
            this.alunosPosGraduacao = response.items
            this.hs = response.hs;
          });
      },
    },
    mounted() {
      this.carregarAlunosPosGraduacao();
    }
  }
</script>
