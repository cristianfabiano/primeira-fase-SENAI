// function calcularEx1014(){
//     let distancia = Number( document.getElementById('inputDistancia').value )
//     let combustivel = Number( document.getElementById('inputCombustivel').value )

//     let consumo = distancia / combustivel
//     console.log(consumo);

//     // document.getElementById('resultadoConsumo').innerHTML = "O consumo foi de " + consumo + "km/l"
//     document.getElementById('resultadoConsumo').innerHTML = `O consumo foi de ${consumo}km/l`
    
// }


// function executarTeste(){
//     let nome = document.getElementById("inputNome").value
//     // console.log(nome);

//     document.getElementById('resultado').innerHTML += nome    
    
// }


 function calcularCofrinho() {
      let produto = Number(document.getElementById('inputProduto').value);
      let m1 = Number(document.getElementById('input1').value);
      let m050 = Number(document.getElementById('input050').value);
      let m025 = Number(document.getElementById('input025').value);
      let m010 = Number(document.getElementById('input010').value);
      let m005 = Number(document.getElementById('input005').value);

      let total = (m1 * 1) + (m050 * 0.50) + (m025 * 0.25) + (m010 * 0.10) + (m005 + 0.05)

      let resultado = document.getElementById('resultado');
      resultado.innerHTML = `Total no cofrinho: R$ ${total.toFixed(2)}<br>`;

      if(total >= produto){
        resultado.innerHTML +="Parabéns, pode comprar o produto!!";
      
    }else{
        let falta = produto - total;
        resultado.innerHTML += `Falta R$ ${falta.toFixed(2)} para comprar.`
    }
 }