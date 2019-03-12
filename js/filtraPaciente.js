let campoFiltro = document.querySelector("#filtro-pesquisa")

campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    
    let pacientesFiltro = document.querySelectorAll(".paciente")

    if(this.value.length == 0){
        
        for(let i = 0; i < pacientesFiltro.length; i++){
            let paciente = pacientesFiltro[i]
            paciente.classList.remove("invisivel")
        }

    }else{

        for(let i = 0; i < pacientesFiltro.length; i++){
            let paciente = pacientesFiltro[i]
            tdNomeFiltro = paciente.querySelector(".info-nome")
            nomeFiltro = tdNomeFiltro.textContent

            //expressao regular
            let expressaoRegular = new RegExp(this.value,"i")

            //verificacao de igualdade
            if(!expressaoRegular.test(nomeFiltro)){
                paciente.classList.add("invisivel")
            } 
            else{
                paciente.classList.remove("invisivel")
            }
        }
    }  
})