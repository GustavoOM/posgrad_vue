<template>
    <div class="fundo">
        <img 
            v-if="atributosExtras.urlFoto === -1 || atributosExtras == {}" 
            :src="'../../src/assets/fotoDefault.jpg'"
            alt="imagem do posgraduando selecionado">
        <img v-else :src="atributosExtras.urlFoto" 
            alt="imagem default de um boneco laranja e um azul"
            onError="this.onerror=null;this.src='../../src/assets/fotoDefault.jpg';">
        <div>
            <h1 class="nome">{{ nome }}</h1>
            <h2 class="data">{{ data }}</h2>
            <div class="cursoPrograma">
                <h3>Curso: {{ curso }}</h3>
                <h3>Programa: {{ programa }}</h3>

                <h3 v-if="atributosExtras.curriculoLattes !== -1">Currículo Lattes: {{ atributosExtras.curriculoLattes }}</h3>
                <h3 v-if="atributosExtras.descricaoGeralICMC !== -1">Descrição Geral ICMC: {{ atributosExtras.descricaoGeralICMC }}</h3>
                <h3 v-if="atributosExtras.email !== -1">Email: {{ atributosExtras.email }}</h3>
                <h3 v-if="atributosExtras.idPessoa !== -1">ID Pessoa: {{ atributosExtras.idPessoa }}</h3>
                <h3 v-if="atributosExtras.nUSP !== -1">NUSP: {{ atributosExtras.nUSP }}</h3>
                <h3 v-if="atributosExtras.paginaPessoal !== -1">Página Pessoal: {{ atributosExtras.paginaPessoal }}</h3>
                <h3 v-if="atributosExtras.papelNoICMC !== -1">Papel no ICMC: {{ atributosExtras.papelNoICMC }}</h3>
                <h3 v-if="atributosExtras.researcherIDNumber !== -1">Researcher ID Number: {{ atributosExtras.researcherIDNumber }}</h3>
                <h3 v-if="atributosExtras.researcherIDUrl !== -1">Researcher ID URL: {{ atributosExtras.researcherIDUrl }}</h3>
                <h3 v-if="atributosExtras.telefone !== -1">Telefone: {{ atributosExtras.telefone }}</h3>
                </div>
            </div>
        <img class="fecharCard" @click="fecharFicha()" src="../assets/x.svg" alt="imagem do posgraduando selecionado">
    </div>
</template>

<script>
    export default{
        name: "FichaIndividualSelecionada",
        props: {
            nome: String,
            data: String,
            curso: String,
            programa: String,
            atributosExtras: Object
        },
        methods:{
            fecharFicha(){
                this.$emit("emit-fechar")
            }
        }
    }
</script>

<style scoped>
    .fecharCard{
        width: 20px;
        height: auto;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
        cursor: pointer;
        color: #ec5b5b;
    }
    img{
        height: 300px;
        border-radius: 10px;
        object-fit: cover;
    }
    .fundo{
        color: #FEA342;
        margin: 0 20px;
        border-radius: 10px;
        background-color: #3d3d3d;
        border: 4px solid #FEA342;
        padding: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        align-items: flex-start;
    }
    .nome{
        text-align: center;
        font-family: "Roboto", sans-serif;

    }
    .data{
        margin: -5px;
        text-align: center;
        font-family: "Roboto", sans-serif;

    }
    .cursoPrograma{
        margin-left:10px;
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 0px;
        font-family: "Roboto", sans-serif;
        flex-direction: column;
    }
</style>
