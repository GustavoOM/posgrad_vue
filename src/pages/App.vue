<template>
  <Cabecalho/>
  <div>
    Testando
  </div>

  <Rodape/>
</template>

<script>
import Cabecalho from '../components/Cabecalho.vue';
import Rodape from '../components/Rodape.vue';

  export default{
    name: "app",
    components: { Cabecalho, Rodape }
}
</script>
