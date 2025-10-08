// const numeros = [3,5,8,10]

// const valoresDobrado = numeros.map((valor) => valor*2 )
// console.log(valoresDobrado)


const usuarios = [
    {nome: "João",idade:32},
    {nome: "Maria",idade: 15},
    {nome: "Pedro",idade: 21}
]
const idadeUsuarios = usuarios.map(usuario => usuario.idade)
console.log(idadeUsuarios)

for(let idade of idadeUsuarios){
console.log(idade);
}