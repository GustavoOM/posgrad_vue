<template>
    <div>
        <img src="../assets/user.svg" alt="Icone de usuário">
        <h1 class="texto">{{nome}}</h1>
    </div>
</template>

<script>
    export default{
        name: "FichaIndividual",
        props: {
            nome: String
        }
    }
</script>
<style scoped>
    div{
        background-color: #FEA342;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }
    div:hover{
        box-shadow: 10px 10px 2px 1px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
    img{
        width: 30px;
        height: auto;
        margin: 15px 0 5px 0;
    }
    .texto {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 48px;
        line-height: 16px;
        font-size: 14px;
        margin: 10px 5px 10px 5px;
        text-align: center;
        color: #597897;
        font-family: "Roboto", sans-serif;
    }
</style>