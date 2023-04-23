
var nueva = " "
function encriptador(){
    var mensaje = "Por favor no mas de 40 letras"
    document.getElementById("japi").value = " ";
    var algo = document.getElementById('w3review').value;
    var inicio = 1
    for ( var i = 0; i < inicio; i++){
        
        if (algo.length > 40){
            document.getElementById("japi").innerHTML = mensaje;  
            document.getElementById("w3review").value = " ";
            break;
        }else{
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
        }
        document.getElementById("japi").innerHTML = nueva;
        document.getElementById("w3review").value = " ";
        return nueva;
    }
}

function desencriptador(){

    var algo = document.getElementById('w3review').value;
    
    var desencriptado = " "
    for  ( var  i=0 ; i < algo.length; i++) {
        var letra = algo.charAt(i)
            if (letra == "a" || letra == "i" || letra == "o" || letra == "e" || letra == "u" ){
                desencriptado += letra; 
                if (letra == "a"){
                    i += 1
                }
                else if (letra == "i"){
                    i += 3
                }
                else if (letra == "o"){
                    i += 3
                }else if (letra == "u"){

                    i+=3
                }else if (letra == "e"){

                    i+=4
                }
        
            }else{
                desencriptado += letra;

            }
    }   
    document.getElementById("test").innerHTML = desencriptado; 
    document.getElementById("w3review").value = " ";
}  
                
