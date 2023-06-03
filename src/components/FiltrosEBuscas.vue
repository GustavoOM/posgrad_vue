<template>
    <div class="filtros">
      <div class="busca">
        <span class="titulo">Buscar por nome ou data:</span>
        <input class="buscaInput" type="text" v-model="busca" @input="onInputChange"/>
      </div>
      <div class="ordens">
        <span class="titulo">Filtrar por ordens:</span>
        <div class="ordensOpcoes">
            <div class="ordensOpcao">
                <img class="ordemOpcaoImg" :src="ordemSelecionada == 'ANOC' ? 'src/assets/sup.svg' : 'src/assets/up.svg'" alt="Ano ordem crescente" @click="selecionarOrdem('ANOC')">
                <span class="ordensOpcaoTitulo">ANO</span>
                <img class="ordemOpcaoImg" :src="ordemSelecionada == 'ANOD' ? 'src/assets/sdown.svg' : 'src/assets/down.svg'" alt="Ano ordem decrescente" @click="selecionarOrdem('ANOD')">
            </div>
            <div class="ordensOpcao">
                <img class="ordemOpcaoImg" :src="ordemSelecionada == 'NOMEC' ? 'src/assets/sup.svg' : 'src/assets/up.svg'" alt="Nome ordem crescente" @click="selecionarOrdem('NOMEC')">
                <span class="ordensOpcaoTitulo">NOME</span>
                <img class="ordemOpcaoImg" :src="ordemSelecionada == 'NOMED' ? 'src/assets/sdown.svg' : 'src/assets/down.svg'" alt="Nome ordem decrescente" @click="selecionarOrdem('NOMED')">
            </div>
            <div class="ordensOpcao">
                <img class="ordemOpcaoImg" :src="ordemSelecionada == 'CURSOC' ? 'src/assets/sup.svg' : 'src/assets/up.svg'" alt="Curso ordem crescente" @click="selecionarOrdem('CURSOC')">
                <span class="ordensOpcaoTitulo">CURSO</span>
                <img class="ordemOpcaoImg" :src="ordemSelecionada == 'CURSOD' ? 'src/assets/sdown.svg' : 'src/assets/down.svg'" alt="Curso ordem decrescente" @click="selecionarOrdem('CURSOD')">
            </div>
            <div class="ordensOpcao">
                <img class="ordemOpcaoImg" :src="ordemSelecionada == 'PROGC' ? 'src/assets/sup.svg' : 'src/assets/up.svg'" alt="Curso ordem crescente" @click="selecionarOrdem('PROGC')">
                <span class="ordensOpcaoTitulo">PROG</span>
                <img class="ordemOpcaoImg" :src="ordemSelecionada == 'PROGD' ? 'src/assets/sdown.svg' : 'src/assets/down.svg'" alt="Curso ordem decrescente" @click="selecionarOrdem('PROGD')">
            </div>
        </div>
      </div>
      <div class="programas">
        <span class="titulo">Filtrar por Programas:</span>
        <div class="programasBotoes">
          <div v-for="programa in opcoesPrograma" :key="programa.value" class="radio-button" :class="{ 'selected': programaSelecionado === programa.value }" @click="selecionarPrograma(programa.value)">
            <div class="radio-inner-programa"></div>
            <label class="radio-label-programa">{{ programa.label }}</label>
          </div>
        </div>
      </div>
      <div class="cursos">
        <span class="titulo">Filtrar por Curso:</span>
        <div class="cursosBotoes">
          <div v-for="curso in opcoesCurso" :key="curso.value" class="radio-button" :class="{ 'selected': cursoSelecionado === curso.value }" @click="selecionarCurso(curso.value)">
            <div class="radio-inner-curso"></div>
            <label class="radio-label">{{ curso.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FiltrosEBuscas",
    data() {
      return {
        cursoSelecionado: "",
        programaSelecionado: "",
        ordemSelecionada: "ANOC",
        busca: "",
        opcoesCurso: [
          { label: "DD", value: "DD" },
          { label: "ME", value: "ME" },
          { label: "DO", value: "DO" },
        ],
        opcoesPrograma: [
          { label: "PROFMAT", value: "PROFMAT" },
          { label: "\bCCMC ", value: "CCMC" },
          { label: "\bPIPGEs", value: "PIPGEs" },
          { label: "\b\bMAT  ", value: "MAT" },
          { label: "\bMECAI ", value: "MECAI" },
        ]
      };
    },
    methods: {
        selecionarCurso(curso) {
            if (this.cursoSelecionado === curso) {
              this.cursoSelecionado = null;
            }
            else{      
                this.cursoSelecionado = curso;
            }
            this.$emit("emit-curso", this.cursoSelecionado)
        },
        selecionarPrograma(programa) {
            if (this.programaSelecionado === programa) {
              this.programaSelecionado = null;
            }
            else{      
                this.programaSelecionado = programa;
            }
            this.$emit("emit-programa", this.programaSelecionado)
        },
        selecionarOrdem(ordem) {    
            this.ordemSelecionada = ordem;
            this.$emit("emit-ordem", this.ordemSelecionada)
        },
        onInputChange() {
          this.$emit('emit-busca', this.busca)
        }
    },
  };
  </script>
  
  <style scoped>
  .filtros{
    margin: 20px;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap: 24px;
  }
  @media (max-width: 1000px) {
    .filtros{
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 550px) {
    .filtros{
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
  .cursos{
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cursosBotoes{
    display: flex;
  }
  .titulo{
    font-size: 20px;  
    font-family: "Roboto", sans-serif;
  }
  .programas{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .programasBotoes{
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .ordens{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ordensOpcoes{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px
  }

  .ordensOpcao{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ordensOpcaoTitulo{
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    margin: -4px 0 -4px 0;
  }

  .ordemOpcaoImg{
    height: 16px;
    cursor: pointer;
  }
  .upSelected{
    background-image: url('../assets/sup.svg');
  }
  .busca{
    display: flex;
    flex-direction: column;
  }
  .buscaInput{
    margin-top: 5px;
    height: 32px;
    border: 2px solid #3d3d3d;
    border-radius: 5px;
    padding: 0 8px 0 8px;
    color: #3d3d3d;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
  }
  .radio-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 8px 0 8px;
  }
  
  .radio-inner-curso {
    width: 32px;
    height: 32px;
    border-radius: 5px;
    border: 2px solid #3d3d3d;
    margin-top: 5px;
    background-color: rgba(255, 255, 255, 0.226);
    transition: background-color 0.5s ease;
  }

  .radio-inner-programa {
    width: 64px;
    height: 12px;
    border-radius: 5px;
    border: 2px solid #3d3d3d;
    margin-top: 4px;
    background-color: rgba(255, 255, 255, 0.226);
    transition: background-color 0.5s ease;
  }
  
  .selected .radio-inner-curso {
    background-color: #808080bd;
  }

  .selected .radio-inner-programa {
    background-color: #808080bd;
  }
  
  .radio-label {
    font-weight: bold;
    color: #3d3d3d;
    margin-left: -28px;
    margin-top: 5px;
    font-size: 14px;
    cursor: pointer;

  }
  .radio-label-programa {
    font-weight: bold;
    color: #3d3d3d;
    margin-left: -64px;
    margin-top: 5px;
    font-size: 12px;
    cursor: pointer;

  }
  </style>
  