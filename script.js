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
        locale: " ",
        dateFormat: "d/m/Y", // Formato de fecha
        minDate: "01-01-1900",    // Fecha mínima 
        maxDate: "12-12-3050", // Fecha máxima
    });

    formulario.addEventListener("submit", function (event) {
        // lógica para enviar el formulario por correo
        // usar AJAX o enviar los datos al servidor
        event.preventDefault(); // Evita el envío por defecto
        alert("Formulario enviado con éxito");
    });
});

// Fecha al inicio del formulario
moment.locale('es'); 

const formattedDate = moment().format('LL'); 
document.getElementById("current_date").innerHTML = formattedDate;
        
//quitar el autocomplete a todos los campos
var campos = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"], input[type="date"]');

//Valida información tipo de proceso
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
// Este script es para calcular el ancho de las columnas al cargar la página
window.addEventListener('load', () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column) => {
        const h3 = column.querySelector('h3');
        column.style.width = h3.offsetWidth + 'px';
    });
});

//condicionales a la selección de constitucionales y ordinarios
document.addEventListener("DOMContentLoaded", function () {
    const procesoSelect = document.getElementById("proceso");
    const cuiInput = document.getElementById("cui");

    // Al cargar la página, limpia el valor de CUI y habilita ambas opciones.
    cuiInput.value = "";
    procesoSelect.querySelectorAll("option").forEach((option) => {
        option.disabled = false;
    });

    let formSnapshot = "";

    procesoSelect.addEventListener("change", function () {
        const seleccion = procesoSelect.value;

        // Habilitar todas las opciones primero
        procesoSelect.querySelectorAll("option").forEach((option) => {
            option.disabled = false;
        });

        // Ahora, deshabilita la opción seleccionada
        if (seleccion === "Constitucional") {
            procesoSelect.querySelector('option[value="Ordinario"]').disabled = true;
        } else if (seleccion === "Ordinario") {
            procesoSelect.querySelector('option[value="Constitucional"]').disabled = true;
        }

        // Borra todo lo que sigue en el formulario después del CUI
        const formFields = document.querySelectorAll("#formulario input, #formulario select");
        const foundCui = false;

        formFields.forEach((element) => {
            if (foundCui) {
                element.value = "";
            }

            if (element === cuiInput) {
                foundCui = true;
            }
        });
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

// Cambiar el nombre de sujetos procesales a sujetos tanto en el botón como en la sección 
document.addEventListener("DOMContentLoaded", function () {
    // elemento select
    var procesoSelect = document.getElementById("proceso");

    // botón
    var mostrarSujetosButton = document.getElementById("mostrar-sujetos");

    // sección
    var tituloSujetos = document.querySelector("#sujetos-procesales h2");

    // Función para cambiar el nombre y mostrar u ocultar el botón
    function updateSujetosInfo() {
        if (procesoSelect.value === "Constitucional") {
            // Cambia el texto del botón a "Sujetos"
            mostrarSujetosButton.textContent = "Sujetos";

            // Cambia el título de la sección
            tituloSujetos.textContent = "SUJETOS";

            // Mostrar el botón
            mostrarSujetosButton.style.display = "block";
            tituloSujetos.style.display = "block";
        } else if (procesoSelect.value === "Ordinario") {
            // Cambia el texto del botón a "Partes Intervinientes"
            mostrarSujetosButton.textContent = "Sujetos Procesales / Partes Intervinientes";

            // Cambia el título de la sección
            tituloSujetos.textContent = "Sujetos Procesales / Partes Intervinientes";

            // Mostrar el botón
            mostrarSujetosButton.style.display = "block";
            tituloSujetos.style.display = "block";
        } else {
            // Restablece el texto original del botón
            mostrarSujetosButton.textContent = "Sujetos Procesales / Partes Intervinientes";

            // Restablece el título de la sección
            tituloSujetos.textContent = "Sujetos Procesales / Partes Intervinientes";

            // Ocultar el botón
            mostrarSujetosButton.style.display = "none";
            tituloSujetos.style.display = "none";
        }
    }

    // Agregar un manejador de eventos al elemento select
    procesoSelect.addEventListener("change", updateSujetosInfo);

    // Llamar a la función inicialmente para reflejar el estado inicial
    updateSujetosInfo();
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

//FUNCIONALIDADES DE ORDINARIOS
document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencia al elemento select de proceso ordinario
    const selectProceso = document.querySelector("select[name='proceso-ordinario']");

    // Obtén referencia a la sección de juzgado de primera instancia
    const juzgado1raInstancia = document.getElementById("juzgado1rainstancia");

    // Obtén referencia a la sección de juzgado de segunda instancia
    const juzgado2daInstancia = document.getElementById("juzgado2da");

    // Palabras clave en minúsculas y exactas
    const palabrasClave = ["apelación", "revisión", "impugnación especial", "casación"];

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

// lista lugar de reclusión 
document.addEventListener("DOMContentLoaded", function () {
    var procesoSelect = document.getElementById("proceso");
    var selectDetenido = document.getElementById("selectdetenido");
    var selectDetenido2 = document.getElementById("selectdetenido2")
    var carcelSection = document.getElementById("carcelSection");
    var carcelSection2 = document.getElementById("carcelSection2");
    var direccionResidenciaSectionC = document.getElementById("direccionResidenciaSectionC");
    var direccionResidenciaSectionO = document.getElementById("direccionResidenciaSectionO");
    var lugarReclusion = document.getElementById("reclusion");
    var lugarReclusion2 = document.getElementById("reclusion2");
    var otroLugarReclusion = document.getElementById("otroLugarReclusion");
    var otroLugarReclusion2 = document.getElementById("otroLugarReclusion2");


    // Carga la lista de carceles desde data.json
    fetch("data.json")
        .then(response =>{
            if(!response.ok) {
                throw new Error ('No se pudo cargar el archivo data.json');
            }
            return response.json();
        })
        .then(data => {
            data['lugar de reclusión'].forEach( option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                lugarReclusion.appendChild(optionElement);
                lugarReclusion2.appendChild(optionElement.cloneNode(true));
            })
        });


    procesoSelect.addEventListener("change", function () {
        if (procesoSelect.value === "Constitucional") {
            direccionResidenciaSectionC.style.display = "none";
            direccionResidenciaSectionO.style.display = "none";
            carcelSection.style.display = "none";
            carcelSection2.style.display = "none";
            otroLugarReclusion.style.display = "none";
            otroLugarReclusionInput.style.display = "none";
        } else if (procesoSelect.value === "Ordinario") {
            direccionResidenciaSectionC.style.display = "none";
            direccionResidenciaSectionO.style.display = "none";
            carcelSection.style.display = "none";
            carcelSection2.style.display = "none";
            otroLugarReclusion.style.display = "block";
            otroLugarReclusionInput.style.display = "block";
        } else {
            direccionResidenciaSectionC.style.display = "none";
            direccionResidenciaSectionO.style.display = "none";
            carcelSection.style.display = "none";
            carcelSection2.style.display = "none";
            otroLugarReclusion.style.display = "none";
            otroLugarReclusionInput.style.display = "none";
        }
    });
    selectDetenido.addEventListener("change", function () {
      if (selectDetenido.value === "detenidosi") {
        carcelSection.style.display = "block";
        otroLugarReclusion.style.display = "none";
        direccionResidenciaSectionC.style.display = "none";
        direccionResidenciaSectionO.style.display = "none";
      } else if (selectDetenido.value === "detenidono") {
        carcelSection.style.display = "none";
        otroLugarReclusion.style.display = "none";
        direccionResidenciaSectionC.style.display = "block";
        direccionResidenciaSectionO.style.display = "block";
      } else if (selectDetenido.value === "detenidootros") {
        carcelSection.style.display = "none";
        otroLugarReclusion.style.display = "block";
        direccionResidenciaSectionC.style.display = "none";
        direccionResidenciaSectionO.style.display = "none";
      } else {
        carcelSection.style.display = "none";
        otroLugarReclusion.style.display = "none";
        direccionResidenciaSectionC.style.display = "none";
        direccionResidenciaSectionO.style.display = "none";
      }
    });
    selectDetenido2.addEventListener("change", function () {
        if (selectDetenido2.value === "detenidosi") {
          carcelSection2.style.display = "block";
          otroLugarReclusion.style.display = "none";
          direccionResidenciaSectionC.style.display = "none";
          direccionResidenciaSectionO.style.display = "none";
        } else if (selectDetenido2.value === "detenidono") {
          carcelSection2.style.display = "none";
          otroLugarReclusion.style.display = "none";
          direccionResidenciaSectionC.style.display = "block";
          direccionResidenciaSectionO.style.display = "block";
        } else if (selectDetenido2.value === "detenidootros") {
          carcelSection2.style.display = "none";
          otroLugarReclusion.style.display = "block";
          direccionResidenciaSectionC.style.display = "none";
          direccionResidenciaSectionO.style.display = "none";
        } else {
          carcelSection2.style.display = "none";
          otroLugarReclusion.style.display = "none";
          direccionResidenciaSectionC.style.display = "none";
          direccionResidenciaSectionO.style.display = "none";
        }
      });
      lugarReclusion.addEventListener("change", function () {
        var selectedOption = lugarReclusion.options[lugarReclusion.selectedIndex].value;
    
        if (selectedOption === "Otro") {
            otroLugarReclusion.style.display = "block";
            otroLugarReclusion2.style.display = "none";
        } else {
            otroLugarReclusion.style.display = "none";
        }
    });
    
    lugarReclusion2.addEventListener("change", function () {
        var selectedOption2 = lugarReclusion2.options[lugarReclusion2.selectedIndex].value;
    
        if (selectedOption2 === "Otro") {
            otroLugarReclusion2.style.display = "block";
            otroLugarReclusion.style.display = "none";
        } else {
            otroLugarReclusion2.style.display = "none";
        }
    });
})

//Espacio de funciones para agregar más campos en secciones

// Botón de agregar un campo más en accionados
var contadorCamposAccionados = 1;

function agregarCamposAccionados() {
    var accionadosContainer = document.getElementById('accionados');
    var nuevoCampo = document.createElement('div');

    contadorCamposAccionados++; 

    nuevoCampo.innerHTML = `
        <hr>
        <div id="accionados" style="display: block;">
        <div class="text" style="display: block;">
            <label for="accionados">Seleccione una opción</label>
            <select name="opcionaccionados" id="acciovincu">
                <option value="accionado">Accionado</option>
                <option value="vinculado">Vinculado</option>
            </select>
            <p>Nombre de la entidad, corporación o persona</p>
            <input type="text" id="accionado1" name="accionado1">
                <div id="accionadosInfo" style="display: block;">
                    <label for="correo1">Correo:</label>
                    <p>Indique un correo electrónico para notificaciones</p>
                    <input type="email" id="correo1" name="correo1">
                    <label for="tel1">Número de teléfono:</label>
                    <p>Número de teléfono donde pueda ser contactado fácilmente</p>
                    <input type="number" id="tel1" minlength="10" maxlength="10">
                    <label for="dir1">Dirección:</label>
                    <p>Dirección física para notificaciones.</p>
                    <input type="text" id="dir1">
                </div>
            </div>
        </div>
        <button type="button" onclick="eliminarCampo('accionados', this)">Eliminar Campo</button>
        <hr>
    `;

    accionadosContainer.appendChild(nuevoCampo);
}

function eliminarCampo(contenedorId, botonEliminar) {
    var campo = botonEliminar.parentNode;
    var accionadosContainer = document.getElementById(contenedorId);

    // Encuentra la posición del campo en el contenedor
    var index = Array.from(accionadosContainer.children).indexOf(campo);

    if (index >= 0) {
        // Elimina el campo y todos los elementos posteriores
        while (index < accionadosContainer.children.length) {
            var siguienteElemento = accionadosContainer.children[index];
            accionadosContainer.removeChild(siguienteElemento);
        }
    }
}

// Agregar campos a accionantes
var contadorCamposAccionantes = 1;

function agregarCamposAccionantes() {
    var accionantesContainer = document.getElementById('accionantes');
    var nuevoCampo = document.createElement('div');
    contadorCamposAccionantes++;

    nuevoCampo.innerHTML = `
        <hr>
        <div id="campo-accionantes">
        <label for="nombreacc${contadorCamposAccionantes}" class="obligatorio">Nombre</label><br>
        <p>Nombres completos sin abreviaturas ni siglas</p>
        <input type="text" id="nombreacc${contadorCamposAccionantes}" required>
        <label for="tipodoctute${contadorCamposAccionantes}" class="obligatorio">Tipo de documento</label>
        <select name="tipodoc" id="tipodoctute${contadorCamposAccionantes}">
            <option value="seleciondoc${contadorCamposAccionantes}">Seleccione un tipo de documento</option>
            <option value="cedula${contadorCamposAccionantes}">Cédula de Ciudadanía</option>
            <option value="ti${contadorCamposAccionantes}">Tarjeta de Identidad</option>
            <option value="cedulaext${contadorCamposAccionantes}">Cédula de extranjería</option>
            <option value="pasaporte${contadorCamposAccionantes}">Pasaporte</option>
        </select>
        <label for="numerodoc${contadorCamposAccionantes}" class="obligatorio">Número de documento</label>
        <p>Debe poner el número de Identificación personal</p>
        <input type="number" id="numerodoc${contadorCamposAccionantes}" min="0" max="9999999999999999" required>
        <label for="direccionresi${contadorCamposAccionantes}" class="obligatorio">Dirección residencia</label>
        <input type="text" name="direccionresi${contadorCamposAccionantes}" required>
        <label for="teltute${contadorCamposAccionantes}" class="obligatorio">Teléfono de contacto</label>
        <input type="number" id="teltute${contadorCamposAccionantes}" min="0" max="9999999999999999" required>
        <label for="correocons${contadorCamposAccionantes}" class="obligatorio">Correo Electrónico</label>
        <input type="email" name="correocons${contadorCamposAccionantes}" required>
        <button type="button" onclick="agregarCamposApoderado(this)">Agregar Apoderado</button>
        <button type="button" onclick="agregarCamposAgenteOficioso(this)">Agregar Agente Oficioso</button>
        </div>
        <button type="button" onclick="eliminarCampo('accionantes', this)">Eliminar Campo</button>        
        <hr>
    `;
    accionantesContainer.appendChild(nuevoCampo);
}

//eliminar elementos accionantes
function eliminarCampo(containerId, botonEliminar) {
    var campo = botonEliminar.parentNode;
    var accionantesContainer = document.getElementById(containerId);

    var index = Array.from(accionantesContainer.children).indexOf(campo);
    
    if (index >=0){
        //elimina el campo y todos los elementos anteriores
        while (index < accionantesContainer.children.length){
            var siguienteElemento=accionantesContainer.children[index];
            accionantesContainer.removeChild(siguienteElemento);
        }
    }
}

var mostrarApoderado = false;
var mostrarAgenteOficioso = false;

function toggleApoderado() {
    var apoderadoContainer = document.getElementById('apoderado');
    mostrarApoderado = !mostrarApoderado;
    apoderadoContainer.style.display = mostrarApoderado ? 'block' : 'none';
    var button = document.getElementById('apoderadoButton');
    button.textContent = mostrarApoderado ? 'Ocultar Apoderado' : 'Agregar Apoderado';
}

function toggleAgenteOficioso() {
    var agenteOficiosoContainer = document.getElementById('agenteof');
    mostrarAgenteOficioso = !mostrarAgenteOficioso;
    agenteOficiosoContainer.style.display = mostrarAgenteOficioso ? 'block' : 'none';
    var button = document.getElementById('agenteOficiosoButton');
    button.textContent = mostrarAgenteOficioso ? 'Ocultar Agente Oficioso' : 'Agregar Agente Oficioso';
}

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
                <label for="tarjetaprof" class "obligatorio">Tarjeta Profesional</label>
                <input type="text" name="tarjetaprofapo" required>
                <label for="correocons1" class="obligatorio">Correo Electrónico</label>
                <p>Relacione el correo electrónico aportado al Registro Nacional de Abogados y otros donde pueda ser contactado.</p>
                <input type="email" name="correocons1" required>
                <label for="teltute1" class="obligatorio">Teléfono de contacto</label>
                <input type="number" min=0 max=9999999999999999 required>
                <button type="button" onclick="eliminarCampo('apoderado', this)">Eliminar Apoderado</button>
            </div>
        </div>
    `;
    accionanteContainer.appendChild(apoderadoContainer);
}

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
                <input type="text" name "cedula-agente" required>
                <label for="tarjeta-profesional-agente" class="obligatorio">Tarjeta Profesional</label>
                <input type="text" name="tarjeta-profesional-agente" required>
                <label for="correo-agente" class="obligatorio">Correo Electrónico</label>
                <p>Relacione el correo electrónico aportado al Registro Nacional de Abogados y otros donde pueda ser contactado.</p>
                <input type="email" name="correo-agente" required>
                <label for="teltute1" class="obligatorio">Teléfono de contacto</label>
                <input type="number" min=0 max=9999999999999999 required>
                <button type="button" onclick="eliminarCampo('agenteoficioso', this)">Eliminar Agente Oficioso</button>
            </div>
        </div>
    `;
    accionanteContainer.appendChild(agenteOficiosoContainer);
}

// Funciones de toggling
function toggleCamposApoderado(button) {
    var apoderadoDiv = document.getElementById("apoderadordina");
    if (apoderadoDiv.style.display === "none") {
        apoderadoDiv.style.display = "block";
        button.innerText = "Ocultar Apoderado";
    } else {
        apoderadoDiv.style.display = "none";
        button.innerText = "Agregar Apoderado";
    }
}

function toggleCamposDefensor(boton, divId) {
    var defensorDiv = document.getElementById(divId);
    if (defensorDiv.style.display === "none" || defensorDiv.style.display === "") {
        defensorDiv.style.display = "block";
        boton.innerText = "Ocultar Representante de Víctimas";
    } else {
        defensorDiv.style.display = "none";
        boton.innerText = "Agregar Representante de Víctimas";
    }
}

//ORDINARIOS

// Función para agregar un nuevo campo procesado
function agregarCampoProcesado() {
    var contenedor = document.getElementById("procesadocont");

    // Crea un nuevo div para el campo procesado
    var nuevoCampo = document.createElement("div");
    nuevoCampo.className = "campo-procesado";

    // Agrega el HTML del campo procesado
    nuevoCampo.innerHTML = `
        <hr>
        <h3>Procesado(s)/Indiciado(s)/Acusado(s)/Condenado(s)/Postulado(s)/Menor(es) Infractor(es)</h3>
        <div class="campo-procesado" style="display: block;" id="procesadocont">
        <label for="nombreproc" class="obligatorio" required>Nombre</label>
        <p>Indique el nombre completo del Procesado(s)/Indiciado(s)/Imputado(s)/Acusado(s)/<br>Condenado(s)/Postulado(s), en caso de ser menor de edad digite solo las iniciales</p>
        <input type="text" id="nombreproc" class="obligatorio" required>
        <label for="tipodocordi" class="obligatorio">Tipo de documento</label>
        <select name="tipodoc" id="tipodocordi">
            <option value="selecciondoc">Seleccione un tipo de documento</option>
            <option value="cedula">Cédula de Ciudadanía</option>
            <option value="ti">Tarjeta de Identidad</option>
            <option value="cedulaext">Cédula de Extranjería</option>
            <option value="pasaporte">Pasaporte</option>
        </select>
        <label for="numerodoc" class="obligatorio">Número de documento</label>
        <p>Indique el número de Identificación personal</p>
        <input type="number" min="0" required>
        <div id="ordinarioSection" style="display: block;">
            <label for="detenido">Está detenido:</label>
            <select name="deteniopc" id="selectdetenido2">
                <option value="seleccionedet">Seleccione una opción</option>
                <option value="detenidosi">Si</option>
                <option value="detenidono">No</option>
            </select>
            <div id="carcelSection2" style="display: none;">
                <label for="carcel">Lugar de reclusión:</label>
                <select name="carcel" id="reclusion2">
                    <option value="carcelselección">Seleccione una opción</option>
                </select>
                <div id="otroLugarReclusion2" style="display: none;">
                    <label for="otroReclusion">Indique el lugar de reclusión:</label>
                    <input type="text" name="otroReclusion">
                </div>
            </div>
            <div id="direccionResidenciaSectionO" style="display: none;">
                <label for="direccionresi" class="obligatorio">Dirección residencia</label>
                <input type="text" name="direccionresi1">
            </div>
        </div>
        <label for="correocons1" class="obligatorio">Correo Electrónico</label>
        <input type="email" name="correocons1" required>
        <label for="teltute1" class="obligatorio">Teléfono de contacto</label>
        <input type="number" minlength="10" maxlength="10" required><br>
        <button type="button" class="eliminarCampoButton">Eliminar Campo</button>
        <button type="button" onclick="toggleCamposApoderado(this)" class="boton-accion">Agregar Apoderado</button> <br> <br>
    </div>
        <hr>
    `;

    // Agrega el nuevo campo al contenedor
    contenedor.appendChild(nuevoCampo);

    // Agrega un manejador de eventos para el botón de eliminación
    var eliminarCampoButton = nuevoCampo.querySelector(".eliminarCampoButton");
    eliminarCampoButton.addEventListener("click", function () {
        contenedor.removeChild(nuevoCampo);
    });
}

// Agregar un manejador de eventos al botón "Agregar otro sujeto procesal"
var agregarCampoButton = document.getElementById("agregarCampoButton");
agregarCampoButton.addEventListener("click", agregarCampoProcesado);

// Agregar un manejador de eventos al botón "Agregar Víctima(s)"
var agregarVictimasButton = document.getElementById("agregarCampoVictimas");
agregarVictimasButton.addEventListener("click", function () {
    agregarCampo("victimas-partecivil");
});

// Función para agregar un nuevo campo de Víctima(s)
function agregarCampo(nombreCampo) {
    var contenedor = document.getElementById(nombreCampo);

    var nuevoCampo = document.createElement("div");
    nuevoCampo.className = "campo-victima";

    nuevoCampo.innerHTML = `<hr>
        <h3>Víctima(s)/Parte(s) Civil(es)</h3>
        <td id="victimas-partecivil" style="display: none;">
        <div class="text" style="display: block;">
            <label for="nombrevic" class="obligatorio">Nombre Víctima - Parte Civil</label>
            <input type="text" id="nombrevic" class="obligatorio" required>
            <label for="tipodocvic" class="obligatorio">Tipo de documento</label>
            <select name="tipodocv" id="tipodocvic">
                <option value="selecciondoc">Seleccione un tipo de documento</option>
                <option value="cedula">Cédula de Ciudadanía</option>
                <option value="ti">Tarjeta de Identidad</option>
                <option value="nit">NIT</option>
                <option value="cedulaext">Cédula de Extranjería</option>
                <option value="pasaporte">Pasaporte</option>
            </select>
            <label for="numero_vict" class="obligatorio">Número documento identidad</label>
            <input type="number" id="numerovic" name="numerodocvict" required>

            <label for="correo1" class="obligatorio">Correo:</label>
            <p>Indique un correo electrónico para notificaciones</p>
            <input type="email" id="correovict" name="correovicti" class="obligatorio" required>
            <label for "telvicti" class="obligatorio">Número de teléfono:</label>
            <p>Número de teléfono donde pueda ser contactado fácilmente</p>
            <input type="number" id="telvicti" minlength="10" maxlength="10" class="obligatorio" required>
            <label for="dirvict" class="obligatorio">Dirección:</label>
            <p>Dirección física para notificaciones.</p>
            <input type="text" id="dirvict" class="obligatorio" required>
        </div>
        <button type="button" onclick="toggleCamposDefensor(this, 'defensor')" class="boton-accion">Agregar Representante de Víctimas</button>
        <div id="defensor" style="display: none;">
            <label name="defensor" id="labeldefensor" class="obligatorio">Representante de Víctimas</label>
            <input type="text" id="defensorvic" required>
            <label for="numero_vict_defensor" class="obligatorio">Número documento identidad</label>
            <input type="number" id="numerovicdefensor" name="numerodocvictdefensor" required>
            <label for="correo_defensor" class="obligatorio">Correo:</label>
            <p>Relacione el correo electrónico aportado al Registro Nacional de Abogados y otros donde pueda ser contactado.</p>
            <input type="email" id="correodefensor" name="correodefensor" class="obligatorio" required>
            <label for="tel_defensor" class="obligatorio">Número de teléfono:</label>
            <p>Número de teléfono donde pueda ser contactado fácilmente</p>
            <input type="number" id="teldefensor" minlength="10" maxlength="10" class="obligatorio" required>
            <label for="dir_defensor" class="obligatorio">Dirección:</label>
            <p>Dirección física para notificaciones.</p>
            <input type="text" id="dirdefensor" class="obligatorio" required>
            <label for="tarjetaprofde" class="obligatorio">¿Tiene Tarjeta Profesional?</label>
            <select name="tarjetaprofdef" id="tarjetaprofdef" required>
                <option value="no">No</option>
                <option value="si">Si</option>
            </select>
            <label for="numerotpdef">Número de Tarjeta Profesional</label>
            <p>Indique el número de su Tarjeta Profesional</p>
            <input type="number" min="0" max="9999999999999999">
        </div>
        <button type="button" onclick="agregarCampo('victimas-partecivil')">Agregar Víctima(s)</button>
    </td>
        <button type="button" class="eliminarCampoButton">Eliminar Campo</button>
        <hr>
    `;

    // Agrega el nuevo campo al contenedor
    contenedor.appendChild(nuevoCampo);

    // Agrega un manejador de eventos para el botón de eliminación
    var eliminarCampoButton = nuevoCampo.querySelector(".eliminarCampoButton");
    eliminarCampoButton.addEventListener("click", function () {
        contenedor.removeChild(nuevoCampo);
    });
}

function toggleApoderado2(button) {
    var apoderado2 = document.getElementById("apoderado2");

    if (apoderado2.style.display === "none") {
        apoderado2.style.display = "block";
        button.textContent = "Ocultar Apoderado";
    } else {
        apoderado2.style.display = "none";
        button.textContent = "Agregar Apoderado";
    }
}

// Agregar un manejador de eventos al botón "Agregar Víctima(s)"
var agregarVictimasButton = document.getElementById("agregarCampoVictimas");
agregarVictimasButton.addEventListener("click", function () {
    agregarCampo("victimas-partecivil");
});

// Función para eliminar campos
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

// Agregar un manejador de eventos al botón "Agregar otro sujeto procesal"
var agregarCampoButton = document.getElementById("agregarCampoButton");
agregarCampoButton.addEventListener("click", agregarCampoProcesado);

// Agregar un manejador de eventos al botón "Agregar Víctima(s)"
var agregarCampoVictimasButton = document.getElementById("agregarCampoVictimas");
agregarCampoVictimasButton.addEventListener("click", agregarCampoVictimas);

// Función para eliminar campos
function eliminarCampo(containerId, boton) {
    var elementoAEliminar = boton.parentElement;
    var contenedorPadre = elementoAEliminar.parentElement;

    var hrElement = elementoAEliminar.previousElementSibling;

    if (hrElement && hrElement.tagName === "hr") {
        contenedorPadre.removeChild(hrElement);
    }

    contenedorPadre.removeChild(elementoAEliminar);
}

// Agregar un manejador de eventos al botón "Eliminar Campo"
document.addEventListener("click", function (event) {
    if (event.target && event.target.className === "eliminarCampoButton") {
        eliminarCampo(event.target);
    }
});
//Funciones del botón + (añadir delitos)
function addInput(processType) {
    var containerId = processType === 'constitucional' ? 'inputContainerConstitucional' : 'inputContainerOrdinario';
    var container = document.getElementById(containerId);

    // Crear un nuevo elemento de entrada (input)
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "added-input";

    // Crear un botón de borrar ("-")
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "-";
    deleteButton.className = "delete-button";

    // Agregar un manejador de eventos al botón de borrar
    deleteButton.addEventListener("click", function () {
        container.removeChild(newInput);
        container.removeChild(deleteButton);
    });

    // Agregar el nuevo elemento de entrada y el botón de borrar al contenedor
    container.appendChild(newInput);
    container.appendChild(deleteButton);
}

//agregar ministerio público y acusador privado
function toggleacusador(button) {
    var section = button.nextElementSibling;
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        button.textContent = 'Ocultar Acusador Privado';
    } else {
        section.style.display = 'none';
        button.textContent = 'Agregar Acusador Privado';
    }
}

function toggleminpublico(button) {
    var section = button.nextElementSibling;
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        button.textContent = 'Ocultar Ministerio Público';
    } else {
        section.style.display = 'none';
        button.textContent = 'Agregar Ministerio Público';
    }
}


//Botón submit - validación de campos para enviar 
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = {};
  
    // Capturar los valores de los campos llenos
    const formElements = this.elements;
    for (let i = 0; i < formElements.length; i++) {
      const field = formElements[i];
      if (field.type !== "submit" && field.value.trim() !== '') {
        formData[field.name] = field.value;
      }
    }
  
    if (Object.keys(formData).length > 0) {
      // Generar un archivo PDF con pdfmake
      const docDefinition = {
        content: [
          { text: 'Datos del formulario', style: 'header' },
          formData,
        ],
      };
      pdfmake.createPdf(docDefinition).download('formulario.pdf');
    } else {
      alert('No hay datos para guardar en el archivo.');
    }
  });