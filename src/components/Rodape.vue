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
        max-height: 68px;
        width: 100%;
        font-family: "Roboto", sans-serif;
    }

    /* botao */
    .botaoVoltarParaHome {
        width: 150px;
        height: 20px;
        text-align: left;
        padding: 0.2rem;
        margin-top: 0.5px;
        border: none;
        outline: none;
        position: fixed;
        bottom: 0;
        color: #000;
        background: #FEA342;
        cursor: pointer;
        z-index: 0;
        border-radius: 10px;
        font-family: "Roboto", sans-serif;
        font-size: 0.8rem;
    }

    .botaoVoltarParaHome:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    .botaoVoltarParaHome:active {
        color: #FEA342
    }

    .botaoVoltarParaHome:active:after {
        background: transparent;
    }

    .botaoVoltarParaHome:hover:before {
        opacity: 1;
    }

    .botaoVoltarParaHome:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #FEA342;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    @keyframes glowing {
        0% { background-position: 0 0;  }
        50% { background-position: 400% 0;  }
        100% { background-position: 0 0;    }
    }
</style>