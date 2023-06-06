<template>
  <div id="conteudo">
    <FiltrosEBuscas @emit-curso="getCurso" @emit-programa="getPrograma" @emit-busca="getBusca" @emit-ordem="getOrdem"/>
    <template v-if="alunoSelecionado">
      <FichaIndividualSelecionada @emit-fechar="fecharFicha" :nome="alunoSelecionado.Nome" :data="alunoSelecionado.Data" :curso="alunoSelecionado.Curso" 
      :programa="alunoSelecionado.Programa" :descricao="alunoSelecionado.descricao" :atributosExtras="atributosExtras"/>
    </template>
    <template v-if="listaPosGrad.length == 0">
        <img class="meninaJogandoBola" src="../../src/assets/gifDeCarregamento.gif" alt="Git de carregamento da lista">
    </template>
    <template v-if="getLista(listaPosGrad).length == 0 && (cursoSelecionado+programaSelecionado+ordemSelecionada+busca)!='ANOC' ">
        <h1 class="mensagemNaoAchou">Nenhum aluno foi encontrado a seguinte combinação de critérios :</h1>
        <ul id="listaDeAtributosNaoEncontrados">
          <li v-if="busca">{{ isNaN(parseInt(busca.charAt(0))) ? "Nome: "+ busca : "Data: "+ busca }}</li>
          <li v-if="programaSelecionado">Curso: {{ programaSelecionado }}</li>
          <li v-if="cursoSelecionado">Programa: {{ cursoSelecionado }}</li>
        </ul>
      </template>
    <div id="itens" >
      <FichaIndividual @emit-click="getAlunoPosGrad" :nome="posgrad.Nome" v-for="posgrad in getLista(listaPosGrad)" :key="posgrad.Ordem" :index="posgrad.Ordem"/>
    </div>
  </div>
</template>
  
<script>
  import FichaIndividual from '../components/FichaIndividual.vue'
  import FiltrosEBuscas from '../components/FiltrosEBuscas.vue'
  import FichaIndividualSelecionada from '../components/FichaIndividualSelecionada.vue'
  import axios from 'axios';


  export default {
    name: "ListaFichasIndividuais",
    components: {
      FichaIndividual,
      FiltrosEBuscas,
      FichaIndividualSelecionada
    },
    data() {
        return {
            alunoSelecionado: undefined,
            cursoSelecionado: "",
            programaSelecionado: "",
            ordemSelecionada: "ANOC",
            busca: "",
            atributosExtras: Object
        };
    },
    props: {
      listaPosGrad: {
        type: Array,
        required: true
      }
    },
    methods:{
      converterData(dataString) {
        const partes = dataString.split('/');
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1; 
        const ano = parseInt(partes[2], 10);
        return new Date(ano, mes, dia);
      },
      async getAlunoPosGrad(index){
        this.fecharFicha();

        this.alunoSelecionado = this.listaPosGrad.find(aluno => aluno.Ordem === index);
        
        const requestBody = {
              grupo: '',
              depto: '',
              nome: this.alunoSelecionado.Nome,
              pagina: '1',
              titulo: ''
          };
          try { 
              const response = await axios.post('http://localhost:4000/pessoas', requestBody, {
                  headers: { 'Content-Type': 'application/json' }
              });
              this.atributosExtras = response.data;
            } catch (error) {
          console.error(error);
          }
      },
      fecharFicha(){
        this.alunoSelecionado = undefined
      },
      getCurso(curso){
        this.cursoSelecionado = curso;
      },
      getPrograma(programa){
        this.programaSelecionado = programa;
      },
      getBusca(busca){
        this.busca = busca;
      },
      getOrdem(ordem){
        this.ordemSelecionada = ordem;
      },
      getLista(todosAlunos){
        let novaLista = todosAlunos
        if (this.cursoSelecionado) {
          novaLista = novaLista.filter(aluno => aluno.Curso.toLowerCase().includes(this.cursoSelecionado.toLowerCase()));
        }
        if (this.programaSelecionado) {
          novaLista = novaLista.filter(aluno => aluno.Programa.toLowerCase().includes(this.programaSelecionado.toLowerCase()));
        }
        if (this.busca) {
          novaLista = novaLista.filter(aluno => (aluno.Nome.toLowerCase().includes(this.busca.toLowerCase())) || aluno.Data.toLowerCase().includes(this.busca.toLowerCase()));
        }
        if(this.ordemSelecionada == "ANOC"){
          return novaLista.sort((a, b) => this.converterData(a.Data) - this.converterData(b.Data));
        }
        else if(this.ordemSelecionada == "ANOD"){
          return novaLista.sort((a, b) => this.converterData(b.Data) - this.converterData(a.Data));
        }
        else if(this.ordemSelecionada == "NOMEC"){
          return novaLista.sort((a, b) => a.Nome.localeCompare(b.Nome))
        }
        else if(this.ordemSelecionada == "NOMED"){
          return novaLista.sort((a, b) => b.Nome.localeCompare(a.Nome));
        }
        else if(this.ordemSelecionada == "CURSOC"){
          return novaLista.sort((a, b) => a.Curso.localeCompare(b.Curso))
        }
        else if(this.ordemSelecionada == "CURSOD"){
          return novaLista.sort((a, b) => b.Curso.localeCompare(a.Curso));
        }
        else if(this.ordemSelecionada == "PROGC"){
          return novaLista.sort((a, b) => a.Programa.localeCompare(b.Programa))
        }
        else if(this.ordemSelecionada == "PROGD"){
          return novaLista.sort((a, b) => b.Programa.localeCompare(a.Programa));
        }
        return novaLista
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
    margin: 20px;
    padding: 20px;
    display: grid;
    width: 90%;
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

  .meninaJogandoBola {
    margin-top: 1.15rem;
  }

  .mensagemNaoAchou{
    margin-top: 2rem;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
  }

  #listaDeAtributosNaoEncontrados {
    display: flex;
    list-style: none;
    margin-top: 2rem;
    text-align: left;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
    justify-content: left;
    flex-direction: column;
    align-items: space-between;
    gap: 0.7rem;
  }
</style>
  