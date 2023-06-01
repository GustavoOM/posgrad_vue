<template>
  <div>
    <Cabecalho/>
    <ListaFichasIndividuais listaCompleta/>
    <Rodape/>
  </div>
</template>

<script>

  import Cabecalho from '../components/Cabecalho.vue'
  import ListaFichasIndividuais from '../components/ListaFichasIndividuais.vue'
  import Rodape from '../components/Rodape.vue'

  export default{
    name: 'PosGrad',
    data() {
      return {
        alunoAtivo: undefined,
        filter: '',
        alunosPosGraduacao: {}
      };
    },
    components:{
      Cabecalho,
      ListaFichasIndividuais,
      Rodape
    },
    methods: {
      carregarAlunosPosGraduacao() {
      const url = 'http://thanos.icmc.usp.br:4567/api/v1/defesas';
      fetch(url)
        .then((data) => (data.json()))
        .then((response) => {
          this.alunosPosGraduacao = response;
          console.log(JSON.stringify(this.alunosPosGraduacao))
        });
      },
    },
    mounted: function () {
        this.$nextTick(function () {
            this.carregarAlunosPosGraduacao()
        })
    }
  }
</script>
