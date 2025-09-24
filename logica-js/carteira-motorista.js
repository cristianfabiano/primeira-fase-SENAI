const prompt = require("prompt-sync")()

 const idade = parseFloat(prompt("Digite sua idade: "))
 const CNH = parseFloat(prompt("Digite 1 se POSSUE CNH e 0 para NÃO POSSUE CNH: "))
 function validarCNH(){
   while (true){
      let CNH = parseInt(prompt("Digite 1 se POSSUE CNH ou 0 se NÃO POSSUI CNH"))
      if(CNH == 1 || CNH == 0){
         return CNH
      } 
      console.log("Valor Inválido!! Digite apenas 1 ou 0")
   }
 }
 if(idade >= 18 && CNH == 1){
    console.log("Aprovado")
 }else{
    console.log("Reprovado")
    
 }
 