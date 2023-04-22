
function encriptador(){
    
    var algo = document.getElementById('w3review').value;
    
    var nueva = " "
    for  ( var  i=0 ; i < algo.length; i++) {
        var letra = algo.charAt(i)
            if (letra == "a"){
                nueva += letra+ "i" 
            }
            else if (letra == "i"){
                nueva += letra+ "mes" 
            }
            else if  (letra == "e"){
                nueva += letra + "nter"   
            }
            else if  (letra == "o"){
                nueva += letra + "ber"
            }
            else if  (letra == "u"){
                nueva += letra + "fat" 
            }
            else{
                nueva += letra 
            }

        }
    document.getElementById("test").innerHTML = nueva;
    document.getElementById("w3review").value = " ";
}

var elemento = ""

function copiar(){
    
    
    document.getElementById("w3review").innerHTML = "puto";
    
    
}

function pegar(){
    
    var codigo = document.getElementById('test').value;
    
    
}


