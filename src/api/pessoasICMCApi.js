import axios from 'axios'

const novosAtributos = {
    curriculoLattes: '...',
    descricaoGeralICMC: '...',
    email: '...',
    idPessoa: '...',
    nUSP: '...',
    paginaPessoal: '...',
    papelNoICMC: '...',
    researcherIDNumber: '...',
    researcherIDUrl: '...',
    telefone: '...',
    urlFoto: '...'
};


export default function recuperarInformacoesExtrasDaPessoa(nomeDaPessoa){
    return buscarMaisInformacoesNoSiteDoICMC(nomeDaPessoa);     
}

async function buscarMaisInformacoesNoSiteDoICMC(nome){
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
        return(response.data);
    } catch (error) {
    console.error(error);
    }
}