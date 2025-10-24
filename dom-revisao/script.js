let usuario

function cadastrarUsuario(){
    // console.log("até aqui ta certo")
    usuario = document.getElementById("inputUsuario").value
    document.getElementById("inputUsuario").value =''

    document.getElementById("resultado").innerHTML = "Usuario cadastrado com sucesso: " + usuario
    }
    