<template>
    <footer id="rodape"> Página criada com fins educacionais para obtenção de mérito na disciplina <a href="https://uspdigital.usp.br/jupiterweb/obterDisciplina?sgldis=SSC0961&codcur=55051&codhab=4">SSC0961</a> - Desenvolvimento Web e Mobile (2023)</footer>
</template>

<script>
    export default{
        name: "Rodape"
    }
</script>


<style scoped>
    a{
        color: #FFFFFF;
    }
    #rodape {
        background-color: #414A53;
        padding: 20px;
        color: #FFFFFF;
        font-size: 1.5rem;
        text-align: center;
        position: fixed;
        bottom: 0;
        max-height: 68px;
        width: 100%;
    }
</style>