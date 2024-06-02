Swal.fire({
    title: 'Bienvenidx',
    text: 'Ingresaste a DeseoViajes',
    icon: 'success',
    confirmButtonText: 'Ingresar',
})  


const formulario = document.getElementById("formulario");
const contenedor = document.getElementById("contenedor");
var holaquetal = document.getElementById("holaquetal");


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    function saludar () {
        holaquetal.innerText=(`Bienvenidx  ${nombre} ${apellido}`)
    }
    saludar () ;
});



const formulario1 = document.getElementById("formulario1");

formulario1.addEventListener('submit', (e) => {
    e.preventDefault();

    const edad = document.getElementById("inputEdad").value;
    const pais = document.getElementById("inputPais").value;
    const residencia = document.getElementById("inputResidencia").value;
    function masinfo () {
        edadypais.innerText= (`Tienes ${edad} años y vives en ${pais} en la ciudad de ${residencia}`)
    }
    masinfo () ;


    if (edad < 18 || edad < '18 años') {
        Swal.fire({
            title: 'Advertencia',
            text: 'Eres menor de edad o ingresaste incorrectamente este campo, ingrésalo correctamente',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } else {
        Swal.fire({
            title: 'Excelente',
            text: 'Eres mayor de edad, puedes continuar con tu registro',
            icon: 'success',
            confirmButtonText: 'Continuar registro'
        });
    }
})


const formulario2 = document.getElementById("formulario2");


formulario2.addEventListener('submit', (e) => {
    e.preventDefault();

    const continente = document.getElementById("inputContinente").value;
    const presupuesto = document.getElementById("inputPresupuesto").value;
    function continentpresupuest() {
        continenteypresupuesto.innerText= (`Has elegido viajar a ${continente} con un presupuesto de ${presupuesto}`)
    }
    continentpresupuest();
});


const formulario3 = document.getElementById("formulario3");
const tiempoylugaryrecorrido = document.getElementById("tiempoylugaryrecorrido")
var tiempo = "" ;
var lugar = "" ;
var recorrido = "" ;
const Array1 = [];

formulario3.addEventListener('submit', (e) => {
    e.preventDefault();

    tiempo = document.getElementById("inputTiempo").value;
    lugar = document.getElementById("inputLugar").value;
    recorrido = document.getElementById("inputRecorrido").value;
    Array1.push({tiempo, lugar, recorrido });
    mostrarArray();
    
});

function mostrarArray() {
    tiempoylugaryrecorrido.innerHTML = "";
    Array1.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `Datos de tu viaje: Tiempo=${item.tiempo}, Lugar=${item.lugar}, Recorrido=${item.recorrido}`
        tiempoylugaryrecorrido.appendChild(itemDiv)
    })

    Swal.fire({
        title: 'Todo listo',
        text: 'Tus datos quedaron guardados. Accede a la sección destinos para estar un paso más cerca de tu viaje',
        icon: 'success',
        confirmButtonText: 'Listo',
    })  
}





