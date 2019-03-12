//ADICIONAR PACIENTE
//mudando titulo
let titulo = document.querySelector(".titulo")
console.log(titulo.textContent)
titulo.textContent = "Aparecida Nutricionista"
console.log(titulo.textContent)

//Eventos no browser (formulário)
titulo.addEventListener("click", () => titulo.textContent = "Aparecida Nutricionista2")

//capturando botão no DOM
let botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(event){ 
    event.preventDefault()

    //coletando informações do formulário
    let form = document.querySelector("#adiciona-form")
    const paciente = obtemPacienteForm(form)
       
    form.reset()

    let erros = validaPaciente(paciente)
    console.log(erros)
    
    if(erros.length > 0){
        exibeMensagemDeErro(erros)    
        return
    }

    adicionaNaTabela(paciente)

    form.reset()
    
    let mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""
})




//FUNÇÕES
function adicionaNaTabela(paciente){
    //capturando tabela de usuários
    let tabela = document.querySelector("#tabela-pacientes")
    //inserindo Tr na tabela
    tabela.appendChild(montaTr(paciente))

    console.log(`${paciente.nome} foi adicionado`)
    console.log(`imc = ${paciente.imc}`)
       
}

function obtemPacienteForm(form){

    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente){
    
    //criando novo elemento no HTML pelo JS (createElement)
    let pacienteTr = document.createElement("tr")   
    pacienteTr.classList.add("paciente") //as Td's serão adicionadas diretamente no "AppendChild"
    
    //validando dados
    if(paciente.peso < 0 || paciente.peso > 500){
        pacienteTr.classList.add("paciente-invalido")
        paciente.imc = "Peso Inválido"
    }

    if(paciente.altura < 0 || paciente.altura > 3.00){
        pacienteTr.classList.add("paciente-invalido")
        paciente.imc = "Altura Inválida"
    }

    if((paciente.altura < 0 || paciente.altura > 3.00) && (paciente.peso < 0 || paciente.peso > 500)){
        pacienteTr.classList.add("paciente-invalido")
        paciente.imc = "Peso e Altura Inválidos"
    }

    //adicionando as "td's" no pai "tr"
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}


function montaTd(conteudo, classe){
    let td = document.createElement("td")
    td.textContent = conteudo
    td.classList.add(classe)

    return td
}

function erro(usuario, informacao){
    if(informacao == false){
        usuario.classList.add("paciente-invalido")
    }
}

function validaPaciente(paciente){

    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("Precisa colocar um nome")
    }
    if(paciente.altura.length == 0 || !validaPeso(paciente.peso)){
        erros.push("O peso é inválido")
    }
    if(paciente.peso.length == 0 || !validaAltura(paciente.altura)){
        erros.push("Altura Inválida")
    }
    if(paciente.gordura == 0){
        erros.push("Gordura não pode ser em branco")
    }

    return erros
}

function exibeMensagemDeErro(erros){
    let ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""

    erros.forEach(erro => {
        let li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}

