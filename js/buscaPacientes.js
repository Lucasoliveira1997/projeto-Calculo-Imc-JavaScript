let botaoBuscar = document.querySelector("#buscar-pacientes")

botaoBuscar.addEventListener("click", function(){
     
    let xhttp = new XMLHttpRequest
    console.log("buscando...")
    

    xhttp.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhttp.addEventListener("load", function(){
        if(xhttp.status == 200){

        let resposta = xhttp.responseText
                
        let pacientesExternos = JSON.parse(resposta)
        
        pacientesExternos.forEach(function(paciente){
            adicionaNaTabela(paciente)
        })
        }else{
            let erroAJAX = document.querySelector("#erro-ajax")
            erroAJAX.classList.remove("invisivel")

            console.log(`${xhttp.status} - ${xhttp.responseText}`)            
        }
    })
        xhttp.send()
    })