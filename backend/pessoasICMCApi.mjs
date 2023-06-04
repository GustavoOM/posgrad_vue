import axios from 'axios';
import express from 'express';
import xpath from 'xpath';
import { DOMParser } from 'xmldom';
import { createProxyMiddleware } from 'http-proxy-middleware';
import bodyParser from 'body-parser';


const urlBaseBuscaPessoas = 'https://www.icmc.usp.br/templates/icmc2015/php/pessoas.php'
const urlBasePessoaEspecifica = 'https://www.icmc.usp.br/pessoas'

const app = express();

app.use((req, res, next) => {
  console.log('Requisição:', req.method, req.originalUrl);
  next();
});

// Middleware de CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Configurar o proxy reverso
app.use('/api/pessoas', createProxyMiddleware({
  target: urlBaseBuscaPessoas,
  changeOrigin: true,
  pathRewrite: {
    '^/api/pessoas': '' // Remova o prefixo '/api/pessoas' da URL
  }
}));


app.use(bodyParser.json()); // Faz o parse do corpo da solicitação JSON


app.post('/pessoas', async (req, res) => {
  let nome = decodeURIComponent(req.body.nome);
  const grupo = '';
  const depto = '';
  const pagina = '1';
  const titulo = '';
  console.log('Nome:', nome);
  try {
    const response = await axios.post(urlBaseBuscaPessoas, {
      grupo,
      depto,
      nome,
      pagina,
      titulo
    }, {
      method: 'POST', // Especifica o método HTTP como POST
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // Define o cabeçalho Content-Type corretamente
      },
    timeout: 10000},
    );
    
    var {idPessoa, urlFoto} = extrairInformacoesParaRecuperarPessoaEspecifica(response.data);

    var dadosExtrasFinais = recuperarDadosExtrasFinais(idPessoa)

    res.send({idPessoa, urlFoto});
  } catch (error) { 
    console.error(error)
    res.status(500).json({ error: 'Erro ao fazer a requisição.' });
  }

});

async function recuperarDadosExtrasFinais(id) {
  const response = await axios.get(urlBasePessoaEspecifica, {
    params: { id }, // Adicione o parâmetro "id" aos query parameters
    timeout: 10000
  });
  
  console.log(recuperarDadosPessoaEspecifica(response.data))
  return(response.data.toString())

}

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});


function extrairInformacoesParaRecuperarPessoaEspecifica(html) {
  const regexId = /<a\s+href="\/pessoas\?id=(\d+)">/;
  const regexUrlFoto = /<img\s+src="([^"]+)"/;

  const matchId = html.match(regexId);
  const matchUrlFoto = html.match(regexUrlFoto);

  if (matchId && matchId[1] && matchUrlFoto && matchUrlFoto[1]) {
    const idPessoa = matchId[1];
    const urlFoto = matchUrlFoto[1];
    return { idPessoa, urlFoto };
  }

  return { idPessoa: undefined, urlFoto: fotoDefault };
}


function recuperarDadosPessoaEspecifica(html) {
  const doc = new DOMParser().parseFromString(html);

  // Executar a consulta XPath
  const xpathResult = xpath.evaluate("//h4[@class='media-heading']", doc, null, xpath.XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const node = xpathResult.singleNodeValue;
  
  const papelNoICMC = '';
  if (node) {
    papelNoICMC = (node.textContent).split(':')[0];
    console.log('AAA+',node.textContent)
  }


  return {papelNoICMC}
}
