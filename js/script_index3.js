// Gráfico de Barras: Emprendimiento Femenino
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Textiles', 'Alimentos', 'Tecnología', 'Salud', 'Educación'],
        datasets: [{
            label: 'Emprendimientos',
            data: [45, 30, 15, 25, 35],
            backgroundColor: '#1c5980',
            borderColor: '#d84bc9',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});

// Gráfico de Torta: Emprendimiento en Colombia
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Antojitos', 'Emprendimiento Social', 'Datos Abiertos'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
        }]
    }
});

// Gráfico de Líneas: Tendencia de la Innovación
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Índice de Innovación',
            data: [60, 65, 68, 72, 75],
            borderColor: '#36a2eb',
            backgroundColor: 'rgba(54, 162, 235, 0.1)',
            fill: true
        }]
    }
});

// Gráfico de Área: Emprendimiento vs Innovación
const areaCtx = document.getElementById('areaChart').getContext('2d');
new Chart(areaCtx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [
            {
                label: 'Emprendimiento',
                data: [50, 52, 55, 58, 60],
                borderColor: '#4bc0c0',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            },
            {
                label: 'Innovación',
                data: [60, 65, 68, 72, 75],
                borderColor: '#ff9f40',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true
            }
        ]
    }
});
