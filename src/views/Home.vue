<template>
    <div class="conteudo">
      <div class="alunos">
        <div class="aluno">
          <h1 class="nomeAluno">Eduardo Costa Miranda Azevedo</h1>
          <h2 class="nuspAluno">12677151</h2>
          <h3>→</h3>
        </div>
        <div class="aluno">
          <h1 class="nomeAluno">Gustavo de Oliveira Martins</h1>
          <h2 class="nuspAluno">12625531</h2>
          <h3>←</h3>
        </div>
      </div>
      <router-link to="/posgrad" class="botao">
        Ir para listagem de pós graduações
      </router-link>
    </div>
    <router-view/>
  </template>
  
  <script>
    export default{
      name: "Home",
  }
  </script>
  
  <style>
    body{
      margin: 0;
      background-color: #597897;
    }
    .conteudo{
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .alunos{
      font-family: "Roboto", sans-serif;
      display: flex;
      justify-content: center;
      gap: 64px;
      color: #fff;
    }
    .aluno{
      text-align: center;
    }
    .nomeAluno{
      font-size: 36px;
    }
    .nuspAluno{
      font-size: 64px;
      margin-top: -20px;
    }
    .botao {
          text-align: center;
          padding: 1rem;
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
  
      .botao:before {
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
  
      .botao:active {
          color: #FEA342
      }
  
      .botao:active:after {
          background: transparent;
      }
  
      .botao:hover:before {
          opacity: 1;
      }
  
      .botao:after {
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