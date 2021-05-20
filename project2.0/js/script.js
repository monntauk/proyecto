function validarRegistro() {
    var nombre, email, pass;
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;

    if(nombre === "" || email === "" || pass === ""){
        alert("Debe ingresar todos los datos")
        
    }else if(pass.length < 8)
        alert("La password debe ser de minimo 8 caracteres")
        
        
    
}

function validarInicio() {
    var correoUsuario, passUsuario;
    
    correoUsuario = document.getElementById("correoUsuario").value;
    passUsuario = document.getElementById("passUsuario").value;

    if(correoUsuario === "" || passUsuario === ""){
        alert("Debe ingresar todos los datos")
        
    }else if(passUsuario.length < 8)
        alert("La password debe ser de minimo 8 caracteres")
        
        
    
}

function validarContacto() {
    var nombreX, correoX, fono;
    
    correoX = document.getElementById("correoX").value;
    nombreX = document.getElementById("nombreX").value;
    fono = document.getElementById("fono").value;

    if(correoX === "" || nombreX === "" || fono === ""){
        alert("Debe ingresar todos los datos")
        
    }

}

$(document).ready(function(){
    $.getJSON(
            'https://api.gael.cloud/general/public/monedas/USD', // url
            function(data){   // que hace
                var valorDolar = data.Valor;

                $("#dolar").html(valorDolar)
            }
    
        );
        

});

