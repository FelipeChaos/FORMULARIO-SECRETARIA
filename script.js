document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const seccionSujetosProcesales = document.getElementById("sujetos-procesales");
    const procesoSelect = document.getElementById("proceso");
    const procesoConstitucionalSpan = document.getElementById("proceso-constitucional");
    const procesoOrdinarioSpan = document.getElementById("proceso-ordinario");
    const conocimientoSelect = document.getElementById("lista-constitucional");
    const conocimientoOrdinarioSelect = document.getElementById("lista-ordinario");
    const preguntasAdicionalesSi = document.getElementById("preguntas-adicionales-si-constitucional");
    const preguntasAdicionalesSiOrdinario = document.getElementById("preguntas-adicionales-si-ordinario");
    const mostrarSujetosButton = document.getElementById("mostrar-sujetos");
    const tituloSujetos = document.querySelector("#sujetos-procesales h2");
    const selectProceso = document.querySelector("select[name='proceso-ordinario']");
    const juzgado1raInstancia = document.getElementById("juzgado1rainstancia");
    const juzgado2daInstancia = document.getElementById("juzgado2da");
    const apoderadoordinaContainer = document.getElementById('apoderadoordina');
    const botonMostrarSujetos = document.getElementById("mostrar-sujetos");
    const tituloSujetosProcesales = document.getElementById("titulo-sujetos-procesales");
    const botonMostrarinfoproceso = document.getElementById("mostrar-infoproceso");
    const tituloseccionproceso = document.getElementById("seccionproceso");
    const otrosInput = document.getElementById("otrosInput");

    // Ocultar el autocompletado para cada campo
    var campos = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"], input[type="date"]');
    campos.forEach(function(campo) {
        campo.setAttribute('autocomplete', 'off');
    });

    // Inicializar Flatpickr
    flatpickr("#fecha", {
        locale: "es",
        dateFormat: "d/m/Y",
        minDate: "01-01-1900",
        maxDate: "12-12-3050",
    });

    // Lógica para enviar el formulario por correo
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Formulario enviado con éxito");
    });

    // Fecha al inicio del formulario
    moment.locale('es');
    const formattedDate = moment().format('LL');
    document.getElementById("current_date").innerHTML = formattedDate;

    // Validación de información tipo de proceso
    procesoSelect.addEventListener("change", function () {
        const selectedProceso = procesoSelect.value;

        // Ocultar todos los campos de proceso
        procesoConstitucionalSpan.style.display = "none";
        procesoOrdinarioSpan.style.display = "none";

        // Mostrar los campos de proceso seleccionados
        if (selectedProceso === "constitucional") {
            procesoConstitucionalSpan.style.display = "block";
        } else if (selectedProceso === "ordinario") {
            procesoOrdinarioSpan.style.display = "block";
        }
    });

    // Calcular el ancho de las columnas al cargar la página
    window.addEventListener('load', () => {
        const columns = document.querySelectorAll('.column');
        columns.forEach((column) => {
            const h3 = column.querySelector('h3');
            column.style.width = h3.offsetWidth + 'px';
        });
    });

    // Código de listas en pregunta de si ya tuvo conocimiento
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

        if (selectedOption === "Si") {
            preguntasAdicionalesSi.style.display = "block";
        } else {
            preguntasAdicionalesSi.style.display = "none";
        }
    });

    conocimientoOrdinarioSelect.addEventListener("change", function () {
        const selectedOption = conocimientoOrdinarioSelect.value;

        if (selectedOption === "Si") {
            preguntasAdicionalesSiOrdinario.style.display = "block";
        } else {
            preguntasAdicionalesSiOrdinario.style.display = "none";
        }
    });

    // Cambiar el nombre de sujetos procesales a sujetos tanto en el botón como en la sección
    procesoSelect.addEventListener("change", function () {
        if (procesoSelect.value === "Constitucional") {
            mostrarSujetosButton.textContent = "Sujetos";
            tituloSujetos.textContent = "SUJETOS";
            mostrarSujetosButton.style.display = "block";
            tituloSujetos.style.display = "block";
        } else if (procesoSelect.value === "Ordinario") {
            mostrarSujetosButton.textContent = "Sujetos Procesales / Partes Intervinientes";
            tituloSujetos.textContent = "Sujetos Procesales / Partes Intervinientes";
            mostrarSujetosButton.style.display = "block";
            tituloSujetos.style.display = "block";
        } else {
            mostrarSujetosButton.textContent = "Sujetos Procesales / Partes Intervinientes";
            tituloSujetos.textContent = "Sujetos Procesales / Partes Intervinientes";
            mostrarSujetosButton.style.display = "none";
            tituloSujetos.style.display = "none";
        }
    });

    // Botón para activar sujetos procesales
    mostrarSujetosButton.addEventListener("click", function () {
        seccionSujetosProcesales.style.display = "block";
    });

    // Funcionalidades de procesos ordinarios
    selectProceso.addEventListener("change", function () {
        const selectedOption = selectProceso.options[selectProceso.selectedIndex];
        const optionValue = selectedOption.value.toLowerCase();
        const contienePalabraClave = palabrasClave.some(palabra => optionValue.includes(palabra));

        if (contienePalabraClave) {
            juzgado1raInstancia.style.display = "block";
        } else {
            juzgado1raInstancia.style.display = "none";
        }
    });

    // Mostrar la sección de juzgado de segunda instancia inicialmente
    juzgado2daInstancia.style.display = "block";

    var mostrarApoderadoordina = false;

    function toggleApoderadordina() {
        mostrarApoderadoordina = !mostrarApoderadoordina;
        apoderadoordinaContainer.style.display = mostrarApoderadoordina ? 'block' : 'none';
    }

    // Funcionalidades importantes
    botonMostrarSujetos.addEventListener("click", function () {
        if (tituloSujetosProcesales.style.display === "none") {
            tituloSujetosProcesales.style.display = "block";
        } else {
            tituloSujetosProcesales.style.display = "none";
        }
    });

    botonMostrarinfoproceso.addEventListener("click", function () {
        if (tituloseccionproceso.style.display === "none") {
            tituloseccionproceso.style.display = "block";
        } else {
            tituloseccionproceso.style.display = "none";
        }
    });

    // Función para mostrar u ocultar elementos según la selección en el campo "Tipo de Proceso"
    function mostrarColumnas() {
        var tipoProceso = procesoSelect.value;
        var columna1 = document.querySelector("#sujetos-procesales td:nth-child(1)");
        var columna2 = document.querySelector("#sujetos-procesales td:nth-child(2)");
        var columna3 = document.querySelector("#sujetos-procesales td:nth-child(3)");
        var columna4 = document.querySelector("#sujetos-procesales td:nth-child(4)");
        var columna5 = document.querySelector("#sujetos-procesales td:nth-child(5)");

        columna1.style.display = "none";
        columna2.style.display = "none";
        columna3.style.display = "none";
        columna4.style.display = "none";
        columna5.style.display = "none";

        if (tipoProceso === "Constitucional") {
            columna1.style.display = "table-cell";
            columna2.style.display = "table-cell";
            juzgado1raInstancia.style.display = "none";
            juzgado2daInstancia.style.display = "none";
        } else if (tipoProceso === "Ordinario") {
            columna3.style.display = "table-cell";
            columna4.style.display = "table-cell";
            columna5.style.display = "table-cell";
            juzgado1raInstancia.style.display = "none";
            juzgado2daInstancia.style.display = "none";
        }
    }

    procesoSelect.addEventListener("change", mostrarColumnas);
    mostrarColumnas();

    procesoConstitucionalSelect.addEventListener("change", function () {
        otrosInput.style.display = "block";
        const selectedProcesoConstitucional = procesoConstitucionalSelect.value;
        if (selectedProcesoConstitucional === "OTROS PROCESOS CONSTITUCIONALES") {
            otrosInput.style.display = "block";
        } else {
            otrosInput.style.display = "none";
        }
    });
});

// Listados de magistrados
document.addEventListener("DOMContentLoaded", function () {
    cargarDatos();
    cargarListasReclusion();
    cargarListasAccionados();
    cargarListasAccionantes();

    // Carga datos desde data.json
    function cargarDatos() {
        const selects = [
            'proceso-constitucional',
            'proceso-ordinario',
            'ley',
            'magistrado-que-conocio-constitucional',
            'magistradoqueconocio-ordinario',
        ];

        selects.forEach((selectName) => {
            const selectElement = document.querySelector(`select[name="${selectName}"]`);
            fetch('data.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('No se pudo cargar el archivo JSON');
                    }
                    return response.json();
                })
                .then(data => {
                    data[selectName].forEach(option => {
                        const optionElement = document.createElement('option');
                        optionElement.value = option;
                        optionElement.textContent = option;
                        selectElement.appendChild(optionElement);
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        });
    }

    // Carga listas de lugar de reclusión
    function cargarListasReclusion() {
        const procesoSelect = document.getElementById("proceso");
        const lugarReclusion = document.getElementById("reclusion");
        const lugarReclusion2 = document.getElementById("reclusion2");
        const otroLugarReclusion = document.getElementById("otroLugarReclusion");
        const otroLugarReclusion2 = document.getElementById("otroLugarReclusion2");

        fetch("data.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo cargar el archivo data.json');
                }
                return response.json();
            })
            .then(data => {
                data['lugar de reclusión'].forEach(option => {
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
    }

    // Cargar listas de acción de datos
    function cargarListasAccionados() {
        var contadorCamposAccionados = 1;
        var accionadosContainer = document.getElementById('accionados');

        function agregarCamposAccionados() {
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

        // Función para eliminar un campo de acciónados
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
    }

    // Cargar listas de acciónantes
    function cargarListasAccionantes() {
        var contadorCamposAccionantes = 1;
        var accionantesContainer = document.getElementById('accionantes');

        function agregarCamposAccionantes() {
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
    }
});
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
        <div class="custom-select" style="display: block;">
            <label for="nombreproc" class="obligatorio" required>Nombre</label>
            <p>Indique el nombre completo del Procesado(s)/Indiciado(s)/Acusado(s)/Condenado(s)/Postulado(s), en caso de ser menor de edad digite solo las iniciales</p>
            <input type="text" class="obligatorio" required>
            <label for="tipodocordi" class="obligatorio">Tipo de documento</label>
            <select name="tipodoc" id="tipodocordi">
                <option value="seleciondoc">Seleccione un tipo de documento</option>
                <option value="cedula">Cédula de Ciudadanía</option>
                <option value="ti">Tarjeta de Identidad</option>
                <option value="cedulaext">Cédula de Extranjería</option>
                <option value="pasaporte">Pasaporte</option>
            </select>
            <label for="numerodoc" class="obligatorio">Número de documento</label>
            <p>Debe poner el número de Identificación personal</p>
            <input type="number" min="0" required>
            <label for="direccionresi" class="obligatorio">Dirección residencia</label>
            <input type="text" name="direccionresi1" required>
            <label for="teltute1" class="obligatorio">Teléfono de contacto</label>
            <input type="number" minlength="10" maxlength="10" required>
            <label for="correocons1" class="obligatorio">Correo Electrónico</label>
            <input type="email" name="correocons1" required>
            <button type="button" class="eliminarCampoButton">Eliminar Campo</button>
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
// Agregar un manejador de eventos al botón "Eliminar Campo"
document.addEventListener("click", function (event) {
    if (event.target && event.target.className === "eliminarCampoButton") {
        eliminarCampo(event.target);
    }
});

function eliminarCampo(button) {
    var container = button.parentElement;
    var input = container.querySelector("input");

    // Eliminar el input y el botón "Eliminar Campo" del contenedor
    container.removeChild(input);
    container.removeChild(button);
}
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

function agregarCampoProcesado() {
    var contenedor = document.getElementById("procesadocont");
    var nuevoCampo = document.createElement("div");
    nuevoCampo.className = "campo-procesado";

    nuevoCampo.innerHTML = `
        <hr>
        <h3>Procesado(s)/Indiciado(s)/Acusado(s)/Condenado(s)/Postulado(s)/Menor(es) Infractor(es)</h3>
        <div class="custom-select" style="display: block;">
            <label for="nombreproc" class="obligatorio" required>Nombre</label>
            <input type="text" class="obligatorio" required>
            <label for="tipodocordi" class="obligatorio">Tipo de documento</label>
            <select name="tipodoc" id="tipodocordi">
                <option value="seleciondoc">Seleccione un tipo de documento</option>
                <option value="cedula">Cédula de Ciudadanía</option>
                <option value="ti">Tarjeta de Identidad</option>
                <option value="cedulaext">Cédula de Extranjería</option>
                <option value="pasaporte">Pasaporte</option>
            </select>
            <label for="numerodoc" class="obligatorio">Número de documento</label>
            <input type="number" min="0" required>
            <label for="direccionresi" class="obligatorio">Dirección residencia</label>
            <input type="text" name="direccionresi1" required>
            <label for="teltute1" class="obligatorio">Teléfono de contacto</label>
            <input type="number" minlength="10" maxlength="10" required>
            <label for="correocons1" class="obligatorio">Correo Electrónico</label>
            <input type="email" name="correocons1" required>
            <button type="button" class="eliminarCampoButton">Eliminar Campo</button>
        </div>
        <hr>
    `;

    contenedor.appendChild(nuevoCampo);

    var eliminarCampoButton = nuevoCampo.querySelector(".eliminarCampoButton");
    eliminarCampoButton.addEventListener("click", function () {
        contenedor.removeChild(nuevoCampo);
    });
}

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

    contenedor.appendChild(nuevoCampo);
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

function addInput(processType) {
    var containerId = processType === 'constitucional' ? 'inputContainerConstitucional' : 'inputContainerOrdinario';
    var container = document.getElementById(containerId);

    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "added-input";

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "-";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
        container.removeChild(newInput);
        container.removeChild(deleteButton);
    });

    container.appendChild(newInput);
    container.appendChild(deleteButton);
}

document.addEventListener("click", function (event) {
    if (event.target && event.target.className === "eliminarCampoButton") {
        eliminarCampo(event.target);
    }
});

function eliminarCampo(button) {
    var container = button.parentElement;
    var input = container.querySelector("input");
    container.removeChild(input);
    container.removeChild(button);
}
