//ADICIONANDO PESSOAS NO BANCO DE DADOS
function enviarDados(){
    const nomePolicial = document.getElementById("nomePolicial").value;
    const sobrenomePolicial = document.getElementById("sobrenomePolicial").value;
    const emailPolicial = document.getElementById("emailPolicial").value;
    const senhaPolicial = document.getElementById("senhaPolicial").value;
    const cpfAtualizar = document.getElementById("cpfPolicial").value;
    const distritoPolicial = document.getElementById("distritoPolicial").value;
    
    fetch('http://localhost:3000/policiais', {
        method: 'POST', 
        
        headers:{
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            nomePolicial: nomePolicial, 
            sobrenomePolicial: sobrenomePolicial,
            emailPolicial: emailPolicial,
            senhaPolicial:senhaPolicial,
            distritoPolicial: distritoPolicial,
            cpfAtualizar:cpfAtualizar
        })

        
    })
    
    .then(response => response.json(),
    alert("Cadastro feito com sucesso"),
    window.location.reload()
    );
}


//ADICIONANDO OS DADOS DO REGISTRO NO BANCO DE DADOS
function enviarRegistro(){
    //pegando da parte sobre o registro
    const id = document.getElementById("id").value;
    const dataDoRegistro = document.getElementById("dataDoRegistro").value;
    const horaDoRegistro = document.getElementById("horaDoRegistro").value;
    const responsavelInvestigacao = document.getElementById("responsavelInvestigacao").value;
    const faixa = document.getElementById("faixa").value;
    //pegando sobre dados da ocorrencia
    const artigo = document.getElementById("artigo").value;
    const local = document.getElementById("localDaOcorrencia").value;
    const data = document.getElementById("dataDaOcorrencia").value;
    const hora = document.getElementById("horaDaOcorrencia").value;
    const flagrante = document.getElementById("flagrante").value;
    //pegando dados dos envolvidos
     const nomeVitima = document.getElementById("nomeVitima").value;
    const cpfrgVitima = document.getElementById("cpfrgVitima").value;

    const nomeTestemunha = document.getElementById("nomeTestemunha").value;
    const cpfrgTestemunha = document.getElementById("cpfrgTestemunha").value;

    const nomeAutor = document.getElementById("nomeTestemunha").value;
    const cpfrgAutor = document.getElementById("cpfrgAutor").value;

    
    fetch('registros', {
        method: 'POST', 
        
        headers:{
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            dataDoRegistro: dataDoRegistro,
            horaDoRegistro :horaDoRegistro,
            responsavelInvestigacao:responsavelInvestigacao,
            faixa:faixa,

            artigo:artigo,
            local:local,
            data:data,
            hora:hora,
            flagrante:flagrante,

            nomeVitima:nomeVitima,
            cpfrgVitima: cpfrgVitima,
            nomeTestemunha:nomeTestemunha,
            cpfrgTestemunha:cpfrgTestemunha,
            nomeAutor:nomeAutor,
            cpfrgAutor:cpfrgAutor

        })

    })
    .then(response => response.json(),
    alert("Registro feito com sucesso"),
    window.location.reload())
}

function printar(){

    var formsRegistro = new Object();
    
    formsRegistro.id = document.getElementById("id").value;
    formsRegistro.dataDoRegistro = document.getElementById("dataDoRegistro").value;
    formsRegistro.horaDoRegistro = document.getElementById("horaDoRegistro").value;
    formsRegistro.responsavelInvestigacao = document.getElementById("responsavelInvestigacao").value;
    formsRegistro.faixa = document.getElementById("faixa").value;
    
    formsRegistro.artigo = document.getElementById("artigo").value;
    formsRegistro.dataDaOcorrencia = document.getElementById("dataDaOcorrencia").value;
    formsRegistro.localDaOcorrencia = document.getElementById("localDaOcorrencia").value;
    formsRegistro.horaDaOcorrencia = document.getElementById("horaDaOcorrencia").value;
    formsRegistro.flagrante = document.getElementById("flagrante").value;
    
    formsRegistro.nomeVitima = document.getElementById("nomeVitima").value;
    formsRegistro.cpfrgVitima = document.getElementById("cpfrgVitima").value;
    formsRegistro.nomeTestemunha = document.getElementById("nomeTestemunha").value;
    formsRegistro.cpfrgTestemunha = document.getElementById("cpfrgTestemunha").value;
    formsRegistro.nomeAutor = document.getElementById("nomeAutor").value;
    formsRegistro.cpfrgAutor = document.getElementById("cpfrgAutor").value;
    
    formsRegistro.inputFormSobre = document.getElementsById("inputFormSobre").value;
    
    var jsonForm = JSON.stringify(formsRegistro);
    
    console.log(formsRegistro.valueOf());
    
    
    
    document.getElementById("registroPrint").innerHTML = "<h2>Registro da ocorrência </h2>" + formsRegistro.id;
    document.getElementById("dataRegistroPrint").innerHTML = '<label>Data do registro: </label>' + formsRegistro.dataDoRegistro;
    document.getElementById("horaRegistroPrint").innerHTML = '<label>Hora do registro: </label> '+ formsRegistro.horaDoRegistro;
    document.getElementById("responsavelPrint").innerHTML = ' <label>Responsável p/ investigação:</label> ' + formsRegistro.responsavelInvestigacao;
    document.getElementById("distritoPrint").innerHTML = '<label>Distrito:</label> ' + formsRegistro.faixa + "<br> <hr>";
    
    document.getElementById("artigoPrint").innerHTML = '<label>Artigo: </label> ' + formsRegistro.artigo;
    document.getElementById("dataDaOcorrenciaPrint").innerHTML = '<label>Data da ocorrência:</label> ' + formsRegistro.dataDaOcorrencia;
    document.getElementById("localDaOcorrenciaPrint").innerHTML =  '<label>Local da ocorrência:</label> ' + formsRegistro.localDaOcorrencia ;
    document.getElementById("horaDaOcorrenciaPrint").innerHTML = '<label>Hora da ocorrência:</label> ' + formsRegistro.horaDaOcorrencia;
    document.getElementById("flagrantePrint").innerHTML =  '<label>Flagrante:</label> ' + formsRegistro.flagrante + "<br> <hr>";
    
    document.getElementById("despacho").innerHTML = "<h2>Despacho da autoridade</h2> <p>Instauro INQUÉRITO POLICIAL<br>PORTARIA em separado</p>" + "<br> <hr>";
    
    document.getElementById("nomeVitimaPrint").innerHTML = '<h2>Vítima</h2><br> <label>Nome da vítima:</label> ' + formsRegistro.nomeVitima;
    document.getElementById("cpfrgVitimaPrint").innerHTML =  '<label>CPF/RG: </label> ' + formsRegistro.cpfrgVitima;
    document.getElementById("nomeTestemunhaPrint").innerHTML = '<h2>Testemunha</h2><br> <label>Nome da Testemunha:</label> ' + formsRegistro.nomeTestemunha;
    document.getElementById("cpfrgTestemunhaPrint").innerHTML = '<label>CPF/RG:</label> ' + formsRegistro.cpfrgTestemunha;
    document.getElementById("nomeAutorPrint").innerHTML =  ' <h2>Autor</h2><br><label>Nome do autor:</label>: ' + formsRegistro.nomeAutor;
    document.getElementById("cpfrgAutorPrint").innerHTML = '<label>CPF/RG:</label> ' + formsRegistro.cpfrgAutor + "<br> <hr>";
    
    document.getElementById("inputFormSobrePrint").innerHTML = '<label>Relato da Ocorrência e obs:</label><br> ' + formsRegistro.inputFormSobre;
    window.print();
    }


//PUT - USANDO PARA ATUALIZAR DADOS JÁ EXISTENtE EM UM CADASTRO
function atualizaDados(){
    const nomePolicial = document.getElementById("nomePolicial").value;
    const id = document.getElementById("id").value;
    const senhaPolicial = document.getElementById("senhaPolicial").value;
    const sobrenomePolicial = document.getElementById("sobrenomePolicial").value;
    const emailPolicial = document.getElementById("emailPolicial").value;
    const cpfAtualizar = document.getElementById("cpfAtualizar").value;
    const distritoPolicial = document.getElementById("distritoPolicial").value;
    
    fetch(`policiais/${id}`, {
        method: 'PUT', 
        
        headers:{
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({
            nomePolicial: nomePolicial, 
            sobrenomePolicial: sobrenomePolicial,
            emailPolicial: emailPolicial,
            distritoPolicial: distritoPolicial,
            cpfAtualizar:cpfAtualizar,
            senhaPolicial: senhaPolicial
        })
       
    })
    .then(response => response.json(),
    alert("cadastro atualizado"),
    window.location.reload());
}