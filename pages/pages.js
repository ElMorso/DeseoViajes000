// Seleccionar todos los botones de "Elegir destino"
const botonesElegir = document.querySelectorAll('.elegir-destino');

botonesElegir.forEach(boton => {
    boton.addEventListener('click', () => {
        const destino = boton.getAttribute('data-destino');
        
        // Recuperar los destinos guardados en localStorage o inicializar como un array vacío
        let destinosSeleccionados = JSON.parse(localStorage.getItem('destinosSeleccionados')) || [];
        
        // Agregar el destino seleccionado al array si no está ya presente
        if (!destinosSeleccionados.includes(destino)) {
            destinosSeleccionados.push(destino);
            // Guardar el array actualizado en localStorage
            localStorage.setItem('destinosSeleccionados', JSON.stringify(destinosSeleccionados));

            Swal.fire({
                title: 'Destino Seleccionado',
                text: `Has seleccionado ${destino}.`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Destino Ya Seleccionado',
                text: `${destino} ya está en tu lista de destinos seleccionados.`,
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    });
});

// Seleccionar el formulario
const contactoForm = document.getElementById('contacto-form');

contactoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Recuperar los destinos seleccionados de localStorage
    let destinosSeleccionados = JSON.parse(localStorage.getItem('destinosSeleccionados')) || [];

    if (destinosSeleccionados.length === 0) {
        // Si no hay destinos seleccionados
        Swal.fire({
            title: 'Sin destinos seleccionados',
            text: 'No has seleccionado ningún destino. Por favor, selecciona al menos un destino antes de enviar el formulario.',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
    } else {
        // Mostrar los destinos seleccionados
        Swal.fire({
            title: 'Destinos Seleccionados',
            text: `Has seleccionado los siguientes destinos: ${destinosSeleccionados.join(', ')}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
});