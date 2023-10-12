let temperaturas = {
    lunes: [0, 0, 0],
    martes: [0, 0, 0],
    miercoles: [0, 0, 0],
    jueves: [0, 0, 0],
    viernes: [0, 0, 0],
    sabado: [0, 0, 0],
    domingo: [0, 0, 0]
    // Agrega el resto de los días
};

function calcularPromedio() {
    // Aquí obtienes las temperaturas de los campos de entrada y las almacenas en el objeto "temperaturas"
    temperaturas.lunes = [
        parseFloat(document.getElementById("lunes-morning").value),
        parseFloat(document.getElementById("lunes-afternoon").value),
        parseFloat(document.getElementById("lunes-night").value)
    ];
    temperaturas.martes = [
        parseFloat(document.getElementById("martes-morning").value),
        parseFloat(document.getElementById("martes-afternoon").value),
        parseFloat(document.getElementById("martes-night").value)
    ];
    temperaturas.miercoles = [
        parseFloat(document.getElementById("miercoles-morning").value),
        parseFloat(document.getElementById("miercoles-afternoon").value),
        parseFloat(document.getElementById("miercoles-night").value)
    ];
    temperaturas.jueves = [
        parseFloat(document.getElementById("jueves-morning").value),
        parseFloat(document.getElementById("jueves-afternoon").value),
        parseFloat(document.getElementById("jueves-night").value)
    ];
    temperaturas.viernes = [
        parseFloat(document.getElementById("viernes-morning").value),
        parseFloat(document.getElementById("viernes-afternoon").value),
        parseFloat(document.getElementById("viernes-night").value)
    ];
    temperaturas.sabado = [
        parseFloat(document.getElementById("sabado-morning").value),
        parseFloat(document.getElementById("sabado-afternoon").value),
        parseFloat(document.getElementById("sabado-night").value)
    ];
    temperaturas.domingo = [
        parseFloat(document.getElementById("domingo-morning").value),
        parseFloat(document.getElementById("domingo-afternoon").value),
        parseFloat(document.getElementById("domingo-night").value)
    ];
    
    // Luego, calculas los promedios y encuentras el día más caliente y frío
    let promedioMaximo = -Infinity;
    let promedioMinimo = Infinity;
    let diaMasFrio = "";
    let diaMasCaluroso = "";

    for (let dia in temperaturas) {
        const promedio = (temperaturas[dia].reduce((a, b) => a + b, 0)) / 3;
        
        if (promedio > promedioMaximo) {
            promedioMaximo = promedio;
            diaMasCaluroso = dia;
        }
        
        if (promedio < promedioMinimo) {
            promedioMinimo = promedio;
            diaMasFrio = dia;
        }
    }

    // Finalmente, actualizas los elementos en el HTML
    document.getElementById("promedio-maximo").textContent = promedioMaximo.toFixed(2);
    document.getElementById("promedio-minimo").textContent = promedioMinimo.toFixed(2);
    document.getElementById("dia-mas-frio").textContent = diaMasFrio;
    document.getElementById("dia-mas-caluroso").textContent = diaMasCaluroso;
}
function crearGrafica() {
    const ctx = document.getElementById("grafica").getContext("2d");

    // Datos para la gráfica
    const labels = ["Promedio Máximo", "Promedio Mínimo"];
    const data = [parseFloat(document.getElementById("promedio-maximo").textContent), parseFloat(document.getElementById("promedio-minimo").textContent)];

    // Colores para las barras
    const colors = ["red", "navy"];

    // Crea la instancia de la gráfica
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

