<template>
  <div>
    <Cabecalho/>
    <ListaFichasIndividuais/>
    <Rodape/>
  </div>
</template>

<script>
  import axios from "axios";

  import Cabecalho from '../components/Cabecalho.vue'
  import ListaFichasIndividuais from '../components/ListaFichasIndividuais.vue'
  import Rodape from '../components/Rodape.vue'

  axios
  .get("http://thanos.icmc.usp.br:4567/api/v1/defesas")
  .then((res) => {
          console.log(res.data)
  })
  .catch((error) => {
          console.log(error);
  });

  export default{
    name: 'PosGrad',
    components:{
      Cabecalho,
      ListaFichasIndividuais,
      Rodape
    }
  }
</script>
