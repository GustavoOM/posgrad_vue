import axios from 'axios'

const novosAtributos = {
    foto: '../../assets/fotoDefault.jpg',
    descricao: '...',
    papelDesempenhado: '...',
    researcherID: '...',
    sala: '...',
    telefone: '...',
    paginaPessoal: '...',
    numero: '...'
};
  

export default function recuperarInformacoesExtrasDaPessoa(nomeDaPessoa){
    realizarRequisicaoPessoas(nomeDaPessoa);
    // idPessoaEncontrada, fotoPessoaEncontrada = 
    return novosAtributos;
  }

async function realizarRequisicaoPessoas(nome){
    const requestBody = {
        grupo: '',
        depto: '',
        nome: nome,
        pagina: '1',
        titulo: ''
    };
    try {
        const response = await axios.post('http://localhost:4000/pessoas', requestBody, {
            headers: { 'Content-Type': 'application/json' }
          });
        console.log(response.data);
    } catch (error) {
    console.error(error);
    }
}