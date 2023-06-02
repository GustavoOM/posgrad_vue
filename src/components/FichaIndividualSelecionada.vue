<template>
    <div class="fundo">
        <h1 class="nome">{{nome}}</h1>
        <h2 class="data">{{data}}</h2>
        <div class="cursoPrograma">
            <h3>Curso: {{curso}}</h3>
            <h3>Programa: {{programa}}</h3>
        </div>
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
        }
    }
</script>

<style scoped>
    .fundo{
        color: #FEA342;
        margin: 20px;
        border-radius: 10px;
        background-color: #3d3d3d;
        border: 4px solid #FEA342;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
