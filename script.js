document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const botonVolver = document.getElementById("boton-volver");
    const botonInicio = document.getElementById("boton-inicio");
    const botonBorrar = document.getElementById("boton-borrar");
    const listaSelect = document.getElementById("lista");
    const preguntasAdicionales = document.getElementById("preguntas-adicionales"); 
    const fechaInput = document.getElementById("fecha");
    const seccionSujetosProcesales = document.getElementById("sujetos-procesales");

    // Desactiva el autocompletado para cada campo
    campos.forEach(function(campo) {
        campo.setAttribute('autocomplete', 'off');
    });


    // Inicializa Flatpickr
    flatpickr("#fecha", {
        locale: "es",
        dateFormat: "d/m/Y", // Formato de fecha
        minDate: "01-01-1900",    // Fecha mínima 
        maxDate: "12-12-3050", // Fecha máxima (hoy)
        locale: "es",
    });

    formulario.addEventListener("submit", function (event) {
        // lógica para enviar el formulario por correo
        // usar AJAX o enviar los datos al servidor
        event.preventDefault(); // Evita el envío por defecto
        alert("Formulario enviado con éxito");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const procesoSelect = document.getElementById("proceso");
    const procesoConstitucionalSpan = document.getElementById("proceso-constitucional");
    const procesoOrdinarioSpan = document.getElementById("proceso-ordinario");

    procesoSelect.addEventListener("change", function () {
        const selectedProceso = procesoSelect.value;

        // Ocultar todos los campos de proceso
        procesoConstitucionalSpan.style.display = "none";
        procesoOrdinarioSpan.style.display = "none";

        // Mostrar los campos correspondientes al tipo de proceso seleccionado
        if (selectedProceso === "Constitucional") {
            procesoConstitucionalSpan.style.display = "block";
        } else if (selectedProceso === "Ordinario") {
            procesoOrdinarioSpan.style.display = "block";
        }
    });
});

// Código de listas en pregunta de si ya tuvo conocimiento
document.addEventListener("DOMContentLoaded", function () {
    const procesoSelect = document.getElementById("proceso");
    const procesoConstitucionalSpan = document.getElementById("proceso-constitucional");
    const procesoOrdinarioSpan = document.getElementById("proceso-ordinario");
    const conocimientoSelect = document.getElementById("lista-constitucional");
    const conocimientoOrdinarioSelect = document.getElementById("lista-ordinario");
    const preguntasAdicionalesSi = document.getElementById("preguntas-adicionales-si-constitucional");
    const preguntasAdicionalesSiOrdinario = document.getElementById("preguntas-adicionales-si-ordinario");

    procesoSelect.addEventListener("change", function () {
        const selectedProceso = procesoSelect.value;

        // Ocultar todos los campos de proceso
        procesoConstitucionalSpan.style.display = "none";
        procesoOrdinarioSpan.style.display = "none";

        // Mostrar los campos correspondientes al tipo de proceso seleccionado
        if (selectedProceso === "Constitucional") {
            procesoConstitucionalSpan.style.display = "block";
        } else if (selectedProceso === "Ordinario") {
            procesoOrdinarioSpan.style.display = "block";
        }
    });

    conocimientoSelect.addEventListener("change", function () {
        const selectedOption = conocimientoSelect.value;

        // Mostrar u ocultar campos adicionales según la selección "Si" o "No"
        if (selectedOption === "Si") {
            preguntasAdicionalesSi.style.display = "block";
        } else {
            preguntasAdicionalesSi.style.display = "none";
        }
    });

    conocimientoOrdinarioSelect.addEventListener("change", function () {
        const selectedOption = conocimientoOrdinarioSelect.value;

        // Mostrar u ocultar campos adicionales según la selección "Si" o "No" para proceso ordinario
        if (selectedOption === "Si") {
            preguntasAdicionalesSiOrdinario.style.display = "block";
        } else {
            preguntasAdicionalesSiOrdinario.style.display = "none";
        }
    });
});


// Botón para activar sujetos procesales
document.addEventListener("DOMContentLoaded", function () {
    const mostrarSujetosButton = document.getElementById("mostrar-sujetos");
    const seccionSujetos = document.getElementById("sujetos-procesales");

    mostrarSujetosButton.addEventListener("click", function () {
        // Muestra la sección de sujetos procesales al hacer clic en el botón
        seccionSujetos.style.display = "block";
    });
});


//funcionalidades para agregar más campos en secciones 

// Botón de agregar un campo más en accionados
var contadorCamposAccionados = 1;

        function agregarCamposAccionados() {
            var accionadosContainer = document.getElementById('accionados');
            var nuevoCampo = document.createElement('div');

            contadorCamposAccionados++; // Incrementa el contador

            nuevoCampo.innerHTML = `<hr>
                <label for="accionado${contadorCamposAccionados}" class="obligatorio">Accionados - Vinculados</label>
                <p>Nombre de la entidad, corporación o persona</p>
                <input type="text" id="accionado${contadorCamposAccionados}" name="accionado${contadorCamposAccionados}" class="obligatorio" required>
                <label for="correo${contadorCamposAccionados}" class="obligatorio">Correo:</label>
                <input type="text" id="correo${contadorCamposAccionados}" name="correo${contadorCamposAccionados}" class="obligatorio" required>
                <label for="tel${contadorCamposAccionados}" class="obligatorio">Número de teléfono:</label>
                <p>Número de teléfono donde pueda ser contactado fácilmente</p>
                <input type="text" id="tel${contadorCamposAccionados}" class="obligatorio" required>
                <label for="dir${contadorCamposAccionados}" class="obligatorio">Dirección:</label>
                <p>Dirección física para notificaciones.</p>
                <input type="text" id="dir${contadorCamposAccionados}" class="obligatorio" required>
                <button type="button" onclick="eliminarCampo('accionados', this)">Eliminar Campo</button>
            `;

            accionadosContainer.appendChild(nuevoCampo);

            // Agregar una línea divisoria
            var lineaDivisoria = document.createElement('hr');
            accionadosContainer.appendChild(lineaDivisoria);
        }

        function eliminarCampo(contenedorId, botonEliminar) {
            var campo = botonEliminar.parentNode;
            var accionadosContainer = document.getElementById(contenedorId);

            // Buscar la línea divisoria anterior al campo
            var lineaDivisoria = campo.previousElementSibling;
            while (lineaDivisoria && lineaDivisoria.tagName !== 'HR') {
                lineaDivisoria = lineaDivisoria.previousElementSibling;
            }

            if (lineaDivisoria && lineaDivisoria.tagName === 'HR') {
                accionadosContainer.removeChild(lineaDivisoria);
            }

            // Elimina el campo
            accionadosContainer.removeChild(campo);
}
    
//agregar campos a accionantes 
var contadorCamposAccionantes = 1;

function agregarCamposAccionantes() {
    var accionantesContainer = document.getElementById('accionantes');
    var nuevoCampo = document.createElement('div');

    nuevoCampo.innerHTML = `
        <hr>
        <label for="nombreacc1" class="obligatorio">Nombre</label><br>
        <p>Nombres completos sin abreviaturas ni siglas</p>
        <input type="text" id="nombreacc1" required>
        
        <label for="tipodoctute" class="obligatorio">Tipo de documento</label>
        <select name="tipodoc" id="tipodoctute">
            <option value="seleciondoc1">Seleccione un tipo de documento</option>
            <option value="cedula1">Cédula de Ciudadanía</option>
            <option value="ti1">Tarjeta de Identidad</option>
            <option value="cedulaext1">Cédula de extranjería</option>
            <option value="pasaporte1">Pasaporte</option>
        </select>
        
        <label for="numerodoc" class="obligatorio">Número de documento</label>
        <p>Debe poner el número de Identificación personal</p>
        <input type="number" min="0" max="9999999999999999" required>
        
        <label for="direccionresi1" class="obligatorio">Dirección residencia</label>
        <input type="text" name="direccionresi1" required>
        
        <label for="teltute1" class="obligatorio">Teléfono de contacto</label>
        <input type="number" min="0" max="9999999999999999" required>
        
        <label for="correocons1" class="obligatorio">Correo Electrónico</label>
        <input type="email" name="correocons1" required>

        <button type="button" onclick="agregarCamposApoderado(this)">Agregar Apoderado</button>
        <button type="button" onclick="agregarCamposAgenteOficioso(this)">Agregar Agente Oficioso</button>
        
        <button type="button" onclick="eliminarCampo('accionantes', this)">Eliminar Campo</button>
    `;

    accionantesContainer.appendChild(nuevoCampo);
    
    // Agregar una línea divisoria
    var lineaDivisoria = document.createElement('hr');
    accionantesContainer.appendChild(lineaDivisoria);
    contadorCamposAccionantes++;
}

// Funcionalidades para agregar apoderado y agente oficioso
var mostrarApoderado = false;
var mostrarAgenteOficioso = false;

function toggleApoderado() {
    var apoderadoContainer = document.getElementById('apoderado');
    mostrarApoderado = !mostrarApoderado;
    apoderadoContainer.style.display = mostrarApoderado ? 'block' : 'none';
}

function toggleAgenteOficioso() {
    var agenteOficiosoContainer = document.getElementById('agenteof');
    mostrarAgenteOficioso = !mostrarAgenteOficioso;
    agenteOficiosoContainer.style.display = mostrarAgenteOficioso ? 'block' : 'none';
}

// agregar apoderados 
function agregarCamposApoderado(boton) {
    var accionanteContainer = boton.parentElement;
    var apoderadoContainer = document.createElement('div');

    apoderadoContainer.innerHTML = `
        <div id="apoderado">
        <hr>
        <h3>Apoderado</h3>
        <div class="columnas">
            <label for="nombre-apoderado" class="obligatorio">Nombre Completo</label>
            <input type="text" name="nombre-apoderado" id="nombreapoderado" required>
            <label for="cedulaapoderado" class="obligatorio">Cédula de Ciudadanía</label>
            <input type="text" name="cedulaapoderado" required>
            <label for="tarjetaprof" class="obligatorio">Tarjeta Profesional</label>
            <input type="text" name="tarjetaprofapo" required>
            <label for="correocons1" class="obligatorio">Correo Electrónico</label>
            <p>Relacione el correo electrónico aportado al Registro Nacional de Abogados y otros donde pueda ser contactado.</p>
            <input type="email" name="correocons1" required>
            <label for="teltute1" class="obligatorio">Teléfono de contacto</label>
            <input type="number" min=0 max = 9999999999999999 required>
            <button type="button" onclick="eliminarCampo('apoderado', this)">Eliminar Apoderado</button>
            </div>
            </div>
    `;
    accionanteContainer.appendChild(apoderadoContainer);
}

// agregar Agente oficioso
function agregarCamposAgenteOficioso(boton) {
    var accionanteContainer = boton.parentElement;
    var agenteOficiosoContainer = document.createElement('div');

    agenteOficiosoContainer.innerHTML = `
        <div id="agenteoficioso">
        <hr>
        <h3>Agente Oficioso</h3>
        <div class="columnas">
            <label for="nombre-agente" class="obligatorio">Nombre Completo</label>
            <input type="text" name="nombre-agente" id="nombre-agente" required>
            <label for="cedula-agente" class="obligatorio">Cédula de Ciudadanía</label>
            <input type="text" name="cedula-agente" required>
            <label for="tarjeta-profesional-agente" class="obligatorio">Tarjeta Profesional</label>
            <input type="text" name="tarjeta-profesional-agente" required>
            <label for="correo-agente" class="obligatorio">Correo Electrónico</label>
            <p>Relacione el correo electrónico aportado al Registro Nacional de Abogados y otros donde pueda ser contactado.</p>
            <input type="email" name="correo-agente" required>
            <label for="teltute1" class="obligatorio">Teléfono de contacto</label>
            <input type="number" min=0 max = 9999999999999999 required>
            <button type="button" onclick="eliminarCampo('agenteof', this)">Eliminar Agente Oficioso</button>
            </div>
            </div>
    `;
    accionanteContainer.appendChild(agenteOficiosoContainer);
}


// Función para eliminar campos
function eliminarCampo(containerId, boton) {
    var accionanteContainer = boton.parentElement;
    var accionantesContainer = document.getElementById(containerId);
    
    // Buscar el índice del campo actual
    var index = Array.prototype.indexOf.call(accionantesContainer.children, accionanteContainer);    
    // Eliminar el campo actual
    accionantesContainer.removeChild(accionanteContainer);

    // Eliminar la línea divisoria anterior (hr) si existe
    var elementos = accionantesContainer.children;
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].tagName === "HR") {
            accionantesContainer.removeChild(elementos[i]);
            break; // Salir del bucle después de eliminar la primera línea divisoria encontrada
        }
    }
}

// Función para eliminar campos de Apoderado o Agente Oficioso
function eliminarCampo(containerId, boton) {
    var elementoAEliminar = boton.parentElement;
    var contenedorPadre = elementoAEliminar.parentElement;

    // Encuentra el elemento HR anterior al elemento a eliminar
    var hrElement = elementoAEliminar.previousElementSibling;

    // Elimina el elemento a eliminar
    contenedorPadre.removeChild(elementoAEliminar);

    // Elimina la línea divisoria anterior (hr) si existe
    if (hrElement && hrElement.tagName === "hr") {
        contenedorPadre.removeChild(hrElement);
    }

    // Encuentra el elemento h3 anterior al elemento a eliminar
    var h3Element = elementoAEliminar.previousElementSibling;

    // Elimina el título h3 anterior al elemento a eliminar si existe
    if (h3Element && h3Element.tagName === "h3") {
        contenedorPadre.removeChild(h3Element);
    }
}


//FUNCIONALIDADES DE ORDINARIOS
document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencia al elemento select de proceso ordinario
    const selectProceso = document.querySelector("select[name='proceso-ordinario']");

    // Obtén referencia a la sección de juzgado de primera instancia
    const juzgado1raInstancia = document.getElementById("juzgado1rainstancia");

    // Obtén referencia a la sección de juzgado de segunda instancia
    const juzgado2daInstancia = document.getElementById("juzgado2da");

    // Palabras clave en minúsculas y exactas
    const palabrasClave = ["segunda", "impugnación especial", "casación"];

    // Función para mostrar u ocultar la sección de juzgado de primera instancia
    function toggleJuzgado1ra() {
        const selectedOption = selectProceso.options[selectProceso.selectedIndex];
        const optionValue = selectedOption.value.toLowerCase();
        const contienePalabraClave = palabrasClave.some(palabra => optionValue.includes(palabra));

        if (contienePalabraClave) {
            juzgado1raInstancia.style.display = "block";
        } else {
            juzgado1raInstancia.style.display = "none";
        }
    }

    // Agrega un evento de cambio al elemento select de proceso ordinario
    selectProceso.addEventListener("change", toggleJuzgado1ra);

    // Verifica el estado inicial al cargar la página
    toggleJuzgado1ra();

    // Agrega un evento al botón "Agregar Juzgado 2da Instancia" para mostrar u ocultar la sección de juzgado de segunda instancia
    const juzgado2daButton = document.getElementById("juz2dainstan");
    juzgado2daButton.addEventListener("click", function () {
        if (juzgado2daInstancia.style.display === "none") {
            juzgado2daInstancia.style.display = "block"; // Mostrar el div
        } else {
            juzgado2daInstancia.style.display = "none"; // Ocultar el div
        }
    });

    // Mostrar la sección de juzgado de segunda instancia inicialmente
    juzgado2daInstancia.style.display = "block";
});

var mostrarApoderadoordina = false;

function toggleApoderadordina() {
    var apoderadoordinaContainer = document.getElementById('apoderadoordina');
    mostrarApoderado = !mostrarApoderado;
    apoderadoContainer.style.display = mostrarApoderado ? 'block' : 'none';
}

//FUNCIONALIDADES IMPORTANTES 
// Botón sujetos procesales e info digital del proceso
// Obtener referencias a elementos HTML
const botonMostrarSujetos = document.getElementById("mostrar-sujetos");
const tituloSujetosProcesales = document.getElementById("titulo-sujetos-procesales");
const botonMostrarinfoproceso = document.getElementById("mostrar-infoproceso");
const tituloseccionproceso = document.getElementById("seccionproceso");


// Agregar un controlador de eventos al botón
botonMostrarSujetos.addEventListener("click", function () {
    if (tituloSujetosProcesales.style.display === "none") {
        tituloSujetosProcesales.style.display = "block"; // Mostrar el título
    } else {
        tituloSujetosProcesales.style.display = "none"; // Ocultar el título
    }
});

// Agregar un controlador de eventos al botón "Información digital"
botonMostrarinfoproceso.addEventListener("click", function () {
    if (tituloseccionproceso.style.display === "none") {
        tituloseccionproceso.style.display = "block"; // Mostrar el título
    } else {
        tituloseccionproceso.style.display = "none"; // Ocultar el título
    }
});


//quitar el autocomplete a todos los campos
var campos = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"], input[type="date"]');


//funcionalidad del botón enviar 
function recargarPagina() {
    location.reload();
}


// Función para mostrar u ocultar elementos según la selección en el campo "Tipo de Proceso"
function mostrarColumnas() {
    var tipoProceso = document.getElementById("proceso").value;
    var columna1 = document.querySelector("#sujetos-procesales td:nth-child(1)");
    var columna2 = document.querySelector("#sujetos-procesales td:nth-child(2)");
    var columna3 = document.querySelector("#sujetos-procesales td:nth-child(3)");
    var columna4 = document.querySelector("#sujetos-procesales td:nth-child(4)");
    var columna5 = document.querySelector("#sujetos-procesales td:nth-child(5)");

    // Ocultar todas las columnas
    columna1.style.display = "none";
    columna2.style.display = "none";
    columna3.style.display = "none";
    columna4.style.display = "none";
    columna5.style.display = "none";

    // Mostrar las columnas según la selección
    if (tipoProceso === "Constitucional") {
        columna1.style.display = "table-cell";
        columna2.style.display = "table-cell";

        // Ocultar la sección de juzgados
        document.getElementById("juzgado1rainstancia").style.display = "none";
        document.getElementById("juzgado2da").style.display = "none";
    } else if (tipoProceso === "Ordinario") {
        columna3.style.display = "table-cell"; 
        columna4.style.display = "table-cell";
        columna5.style.display = "table-cell";

        // Mostrar la sección de juzgados
        document.getElementById("juzgado1rainstancia").style.display = "none";
        document.getElementById("juzgado2da").style.display = "none";
    }
}

// Asignar la función al evento change del campo "Tipo de Proceso"
document.getElementById("proceso").addEventListener("change", mostrarColumnas);

// Llamar a la función al cargar la página para reflejar la selección inicial
mostrarColumnas();

// Selección otros procesos en primera instancia
document.addEventListener("DOMContentLoaded", function () {
    const procesoConstitucionalSelect = document.querySelector('select[name="proceso-constitucional"]');
    const otrosInput = document.getElementById("otrosInput");

    function ocultarProcesosConstitucionales() {
        otrosInput.style.display = "block";
    }

    procesoConstitucionalSelect.addEventListener("change", function () {
        ocultarProcesosConstitucionales();

        // Obtener el valor seleccionado en el select de proceso constitucional
        const selectedProcesoConstitucional = procesoConstitucionalSelect.value;

        // Mostrar el campo de entrada de texto cuando se selecciona "Otros"
        if (selectedProcesoConstitucional === "OTROS PROCESOS CONSTITUCIONALES") {
            otrosInput.style.display = "block";
        } else {
            otrosInput.style.display = "none"
        }
    });
});


// Listados de magistrados

document.addEventListener("DOMContentLoaded", function () {
    cargarDatos();

    function cargarDatos() {
        const procesoConstSelect = document.querySelector('select[name="proceso-constitucional"]');
        const procesoOrdinarioSelect = document.querySelector('select[name="proceso-ordinario"]');
        const leySelect = document.querySelector('select[name="ley"]');
        const magistradoConstitucionalSelect = document.querySelector('select[name="magistrado-que-conocio-constitucional"]');
        const magistradoOrdinarioSelect = document.querySelector('select[name="magistradoqueconocio-ordinario"]');

        fetch('data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo cargar el archivo JSON');
                }
                return response.json();
            })
            .then(data => {
                data['proceso-constitucional'].forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    procesoConstSelect.appendChild(optionElement);
                });

                data['proceso-ordinario'].forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    procesoOrdinarioSelect.appendChild(optionElement);
                });

                data['ley'].forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    leySelect.appendChild(optionElement);
                });

                data['magistrados-constitucional'].forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    magistradoConstitucionalSelect.appendChild(optionElement);
                });

                data['magistrados-ordinario'].forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option;
                    optionElement.textContent = option;
                    magistradoOrdinarioSelect.appendChild(optionElement);
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
});
