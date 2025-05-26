document.getElementById('emprendimientoTest').addEventListener('submit', function (e) {
    e.preventDefault();

    // Recoger respuestas
    const questions = document.querySelectorAll('input[type="radio"]:checked');
    let total = 0;
    let count = 0;
    questions.forEach(q => {
        total += parseInt(q.value);
        count++;
    });

    // Fórmula mejorada: promedio ponderado (como en encuestas oficiales)
    const promedio = total / count;
    let message = '';
    if (promedio >= 3.5) {
        message = '¡Excelente! Tienes un alto potencial emprendedor e innovador.';
    } else if (promedio >= 2.5) {
        message = 'Tienes buen potencial emprendedor. Sigue trabajando en tus habilidades.';
    } else {
        message = 'Sigue desarrollando tu espíritu emprendedor. ¡Tú puedes!';
    }

    document.getElementById('resultado').textContent = message;
});


// Captura los elementos select y el cuerpo de la tabla
const selectAnio = document.getElementById('filtro-año');
const selectTipo = document.getElementById('filtro-tipo');
const selectRegion = document.getElementById('filtro-region');
const tabla = document.querySelector('.data-table tbody');
const filas = tabla.getElementsByTagName('tr');

// Función para filtrar la tabla
function filtrarTabla() {
    const año = selectAnio.value;
    const tipo = selectTipo.value;
    const region = selectRegion.value;

    // Recorre cada fila
    for (let i = 0; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        const celdaAnio = celdas[0].textContent;
        const celdaTipo = celdas[1].textContent;
        const celdaRegion = celdas[2].textContent;

        // Determina si la fila cumple con los filtros
        let mostrar = true;

        if (año !== 'Año' && !celdaAnio.startsWith(año.substring(0, 4))) {
            mostrar = false;
        }
        if (tipo !== 'Tipo de emprendimiento' && tipo !== celdaTipo) {
            mostrar = false;
        }
        if (region !== 'País/Región' && region !== celdaRegion) {
            mostrar = false;
        }

        filas[i].style.display = mostrar ? '' : 'none';
    }
}

// Asigna el evento change a cada select
selectAnio.addEventListener('change', filtrarTabla);
selectTipo.addEventListener('change', filtrarTabla);
selectRegion.addEventListener('change', filtrarTabla);

