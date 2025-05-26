
// Lógica simple para el test basado en suma de puntajes
document.getElementById('emocionalForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const respuestas = [
        +document.querySelector('input[name="q1"]:checked').value,
        +document.querySelector('input[name="q2"]:checked').value,
        +document.querySelector('input[name="q3"]:checked').value,
    ];
    const total = respuestas.reduce((a, b) => a + b, 0);

    let mensaje = '';
    if (total <= 3) {
        mensaje = 'Su estado emocional parece estable. Continúe cuidando su salud mental.';
    } else if (total <= 7) {
        mensaje = 'Puede estar experimentando síntomas leves de estrés o ansiedad. Considere técnicas de relajación o consultar a un profesional.';
    } else {
        mensaje = 'Se recomienda buscar apoyo profesional para una evaluación más profunda y posible tratamiento.';
    }

    document.getElementById('resultado').textContent = mensaje;
});
