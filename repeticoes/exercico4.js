const numero = 5;
const tabuada = document.getElementById('tabuada');
for(let i =1; i<=10; i++){
    const resultado = numero * i;
    const linha = document.createElement('p');
    linha.textContent = `${numero} x ${i} = ${resultado}`;
    tabuada.appendChild(linha)
}