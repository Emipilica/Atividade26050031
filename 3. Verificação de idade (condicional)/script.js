function verificar(){
        let age = document.getElementById("x").value;
        if(age >= 18){
          document.getElementById("idade").innerText = "Maior de idade";
        }
        else{
          document.getElementById("idade").innerText = "Menor de idade";
        }
}