export function extrairInformacoesParaRecuperarPessoaEspecifica(html) {
    const regexId = /<a\s+href="\/pessoas\?id=(\d+)">/;
    const regexUrlFoto = /<img\s+src="([^"]+)"/;
  
    const matchId = html.match(regexId);
    const matchUrlFoto = html.match(regexUrlFoto);
  
    if (matchId && matchId[1] && matchUrlFoto && matchUrlFoto[1]) {
      const idPessoa = matchId[1];
      const urlFoto = matchUrlFoto[1];
      return { idPessoa, urlFoto };
    }
  
    return { idPessoa: undefined, urlFoto: undefined };
  }
  
  
export function recuperarDadosPessoaEspecifica(html) {
    let papelNoICMC = -1;
    let descricaoGeralICMC = -1;
    let rawResearcherID = -1;
    let researcherIDNumber = -1
    let telefone = -1;
    let paginaPessoal = -1;
    let curriculoLattes = -1;
    let researcherIDUrl = -1;
  
    // Para descobrir se a pessoa possui dados extras, pego a classe que contém esses dados por padrão
    let possuiDadosExtras = html.indexOf('media-heading') !== -1;
    if(! possuiDadosExtras) {
      return {papelNoICMC, descricaoGeralICMC, emailImg, researcherIDNumber, researcherIDUrl, telefone, paginaPessoal, curriculoLattes}
    }
    html = html.slice(html.indexOf('media-heading'))
  
  
    // Pegando o papel no icmc
    papelNoICMC = html.slice(html.indexOf('>')+1, html.indexOf(':'));
  
  
    // Pegando a descrição geral
    let possuiDescricaoGeral = html.indexOf('</h4>') !== -1
    if( possuiDescricaoGeral ) { 
      descricaoGeralICMC = html.slice(html.indexOf('</h4>') + 5, html.indexOf('<p>')) 
    } 
      
    
    // Pegando o researcherID
    let possuiResearcherID = html.indexOf('ResearcherID: <a target="_blank" href="') !== -1
    if( possuiResearcherID ){
      rawResearcherID = html.slice(html.indexOf('ResearcherID: <a target="_blank" href="') + 39); 
      researcherIDUrl = rawResearcherID.slice(0, rawResearcherID.indexOf('">'));
      researcherIDNumber = researcherIDUrl.slice(researcherIDUrl.indexOf('rid/') + 4);
    }
    
    // Pegando o telefone
    let possuiTelefone = html.indexOf('Telefone:') !== -1
    if(possuiTelefone){
      let posicaoInicialTelefone = html.slice(html.indexOf('Telefone:') + 9)
      telefone = posicaoInicialTelefone.slice(0, posicaoInicialTelefone.indexOf('</p>'));  
    }
    
    // Pegando a pagina pessoal
    let possuiPaginaPessoal = html.indexOf('Página Pessoal: <a href="') !== -1
    if(possuiPaginaPessoal){
      let posicaoInicialPaginaPessoal = html.slice(html.indexOf('Página Pessoal: <a href="') + 25)
      paginaPessoal = posicaoInicialPaginaPessoal.slice(0, posicaoInicialPaginaPessoal.indexOf('"'));  
    }
  
    let possuiCurriculoLattes = html.indexOf('http://lattes.cnpq') !== -1
    if(possuiCurriculoLattes){
      let posicaoInicialCurriculoLattes = html.slice(html.indexOf('http://lattes.cnpq'));
      curriculoLattes = posicaoInicialCurriculoLattes.slice(0, posicaoInicialCurriculoLattes.indexOf('"'))  
    }
  
    return {papelNoICMC, descricaoGeralICMC, researcherIDNumber, researcherIDUrl, telefone, paginaPessoal, curriculoLattes}
  }
  