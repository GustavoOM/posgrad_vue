<template>
    <header>
        <div class="header-content">
            <a class="icmc-logo"></a>
            <h1 class="header-title">Lista de fichas dos alunos de pós graduação</h1>
            <router-link to="/" class="header-back-button">
                <span class="home-icon"></span>
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
    }

    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-around;        
    }

    .header-back-button {
        display: flex;
        align-items: center;
        background-color: #FFFFFF;
        padding: 10px;
        border-radius: 4px;
        text-decoration: none;
        color: #414A53;
        margin-right: 20px;
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


    .home-icon {
        width: 1.25rem;
        height: 1.25rem;
        background-image: url(../../src/assets/botaoHome.svg);
        background-size: cover;
        margin-right: 5px;
    }

    .header-title {
        color: #FFFFFF;
        margin: 0;
        text-align: center;
    }


</style>