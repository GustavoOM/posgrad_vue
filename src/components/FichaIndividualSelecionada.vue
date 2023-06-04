<template>
    <div class="fundo">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/339687759_753153769772226_6750352783510157651_n.jpg?ccb=11-4&oh=01_AdRpbeSAWVDZwvW5sdUmypF4J_HBWsZ4VBBLB2hng-zapg&oe=64892679" alt="imagem do posgraduando selecionado">
        <div>
            <h1 class="nome">{{nome}}</h1>
            <h2 class="data">{{data}}</h2>
            <div class="cursoPrograma">
                <h3>Curso: {{curso}}</h3>
                <h3>Programa: {{programa}}</h3>
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
            programa: String
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
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 25px;
        font-family: "Roboto", sans-serif;

    }
</style>
