
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
    document.getElementById("japi").innerHTML = nueva;
    document.getElementById("w3review").value = " ";
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
}  
                
