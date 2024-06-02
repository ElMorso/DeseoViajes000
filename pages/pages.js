
function guardarDestinos(destino) {

    var destinosGuardados = JSON.parse(localStorage.getItem('destinos')) || [];
    

    destinosGuardados.push(destino);
    

    localStorage.setItem('destinos', JSON.stringify(destinosGuardados));
}


function obtenerDestinosGuardados() {

    var destinosGuardados = JSON.parse(localStorage.getItem('destinos'));
    

    return destinosGuardados;
}


document.addEventListener("DOMContentLoaded", function() {

    var botonesDestino = document.querySelectorAll(".tarjeta input[type='submit']");

    botonesDestino.forEach(function(boton) {
        boton.addEventListener("click", function() {

            var destino = this.previousElementSibling.textContent.trim();

            guardarDestinos(destino);
        });
    });


    var formularioEnviar = document.querySelector(".formcontacto form");


    formularioEnviar.addEventListener("submit", function(event) {
        event.preventDefault(); 


        var destinosElegidos = obtenerDestinosGuardados();

        if (destinosElegidos !== null && destinosElegidos.length > 0) {
            const mensaje = 'Los destinos elegidos son:<br>' + destinosElegidos.join('');
            Swal.fire({
                title: 'Destinos elegidos',
                html: mensaje,
                icon: 'info',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'No se han seleccionado destinos',
                text: 'Por favor, elija al menos un destino antes de enviar la información.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});