//capturando  um usuário usando uma classe (capturando um array de usuários)
    let pacientes = document.querySelectorAll(".paciente")
    console.log(pacientes)
    
    for(let i = 0; i < pacientes.length; i++){

        //capturando celulas separadas desse usuário
        let tdPeso = pacientes[i].querySelector(".info-peso")
        let tdAltura = pacientes[i].querySelector(".info-altura")
        let tdGordura = pacientes[i].querySelector(".info-gordura")
        let tdImc = pacientes[i].querySelector(".info-imc")

        //capturando o conteúdo das células do usuário
        let peso = tdPeso.textContent
        let altura = tdAltura.textContent
        let gordura = tdGordura.textContent
        let imc = 0

        tdImc.textContent = calculaImc(peso, altura)

        //verificação de dados

        if(peso < 0 || peso > 500){
            console.log("Peso inválido")
            tdImc.textContent = "Peso inválido"
            peso = false
            
        // paciente.style.backgroundColor = "lightcoral";
        erro(pacientes[i], peso)
        }
        if(altura < 0 || altura > 3.00){
            console.log("Altura Inválida")    
            tdImc.textContent = "Altura Inválida"
            altura = false
            erro(pacientes[i], altura)
            
        }
        if(altura == false && peso == false){
            console.log("Peso e Altura Inválidos")    
            tdImc.textContent = "Peso e Altura Inválidos"
            altura = false
            erro(pacientes[i])
            
        }              

        let pesoValido = validaPeso(peso)
        let alturaValida = validaAltura(altura)

        if(!pesoValido){
            console.log("Peso inválido")
            pesoValido = false
            tdImc.textContent = "Peso inválido"
            pacientes[i].classList.add("paciente-invalido")            
        }

        if(!alturaValida){
            console.log("Altura Inválida")
            alturaValida = false
            tdImc.textContent = "Altura Inválida"
            pacientes[i].classList.add("paciente-invalido")
        }

        if(!pesoValido && !alturaValida){
            console.log("Peso e altura inválidos")
            pesoValido = false
            alturaValida = false
            tdImc.textContent = "Peso e Altura Inválidos"
            pacientes[i].classList.add("paciente-invalido")            
 
    }
}




    //FUNÇÕES

    //função para informações incorretas
    function erro(usuario, informacao){
        if(informacao == false){
        usuario.classList.add("paciente-invalido")
        }
    }    

    //função para calcular IMC
    function calculaImc(peso, altura){
        
        return (peso / (altura * altura)).toFixed(2)
         
    }
    
    //FUNÇÕES

    //função para calcular IMC
    function calculaImc(peso, altura){
                
        return (peso / (altura * altura)).toFixed(2)         
    }

    function validaPeso(peso){

        if(peso >= 0 && peso < 500){
            return true
        }else{
            return false
        }
    }

    function validaAltura(altura){

        if(altura >= 0 && altura <= 3.00){
            return true
        }else{
            return false
        }
    }
    
