function verificar(){
        let n1 = document.getElementById("x").value;
        if(n1 >= 6){
          document.getElementById("nota").innerText = "Aprovado";
        }
        else{
          document.getElementById("nota").innerText = "Reprovado";
        }
}