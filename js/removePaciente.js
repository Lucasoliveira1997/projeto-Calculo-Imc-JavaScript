//capturando todos da classe paciente
let tabelaParaExclusao = document.querySelector("#tabela-pacientes")
console.log(tabelaParaExclusao)

tabelaParaExclusao.addEventListener("dblclick", event => {
   event.target.parentNode.classList.add("fadeOut")
   
   setTimeout(() => {
       event.target.parentNode.remove()
   }, 500)
   console.log("clicado e removido")
})
        
