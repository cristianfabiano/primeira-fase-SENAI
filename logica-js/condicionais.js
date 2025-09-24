const prompt = require("prompt-sync")()

const notaFinal = parseFloat(prompt("Digite a nota final: "))
const frequencia = parseFloat(prompt("Digite a frequência: "))

if(notaFinal >= 7 && frequencia >= 8){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}
