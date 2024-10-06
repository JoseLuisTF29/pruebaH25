// Espera un segundo entre cada línea que aparece en la pantalla
function showLine(lineId, delay) {
    setTimeout(function() {
        document.getElementById(lineId).classList.add('reveal');
    }, delay);
}

// Muestra cada línea con un intervalo
showLine('line2', 1000); // 1 segundo
showLine('line3', 3000); // 3 segundos
showLine('line4', 5000); // 5 segundos
showLine('line5', 7000); // 7 segundos
showLine('line6', 9000); // 9 segundos
showLine('line7', 11000); // 11 segundos
showLine('line8', 13000); // 13 segundos
showLine('line9', 15000); // 15 segundos
