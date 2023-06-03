<template>
    <header>
        <div class="header-content">
            <h1 class="header-title">Lista de fichas dos alunos de pós graduação</h1>
            <a href="#" class="header-back-button">
                <span class="home-icon"></span>
                Home
            </a>
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
        position: absolute;
        right: 0;
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