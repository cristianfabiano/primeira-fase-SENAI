let idade

idade = Number(prompt("Diga sua Idade: "))

if(idade <= 15 ){
    alert("Não pode votar")
}else if(idade == 16 || idade == 17){
    alert("Voto Facultativo")
}else if(idade >= 18 && idade <= 65){
    alert("Voto Obrigatório")
}else if(idade > 65)
    alert("Voto Facultativo")