function exibirNumeros(){
    let saida = "";
    for(let contador = 0; contador <= 10; contador++){
        saida += contador + " ";
    }
    document.getElementById("saida").innerText = saida;
}