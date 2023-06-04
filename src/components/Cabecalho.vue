<template>
    <header>
        <div class="header-content">
            <a class="icmc-logo"></a>
            <h1 class="header-title">Lista de fichas dos alunos de pós graduação</h1>
            <router-link to="/" class="header-back-button">
                Home
            </router-link>
        </div>
    </header>

</template>

<script>
    export default{
        name: "Cabecalho"
    }
</script>

<style scoped>

    header {
        background-color: #414A53;
        padding: 20px;
        position: fixed;
        top: 0;
        width: 100%;
        font-family: "Roboto", sans-serif;
    }

    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-around;        
    }

    .header-back-button {
        display: flex;
        align-items: center;
        background-color: transparent;
        padding: 10px;
        border-radius: 4px;
        text-decoration: none;
        color: #FEA342;
        margin-right: 20px;
        border: 0.15rem solid #FEA342;
    }

    .header-back-button:hover {
        color: #3D3D3D;
        background-color: #FEA342; /* Nova cor laranja para o efeito de destaque */
    }

    .icmc-logo {
        width: 10rem; 
        height: 4rem; 
        background-image: url(../../src/assets/logoICMC.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: 5px;
    }
    .header-title {
        color: #FFFFFF;
        margin: 0;
        text-align: center;
    }


</style>