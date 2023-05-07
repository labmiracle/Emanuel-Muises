function niveles() {
    let nivelElegido =  prompt('Elija el nivel de dificultad 1, 2 o 3: ');
    
    if (nivelElegido == '1') {
        let num = prompt('Ingrese un numero de 1 a 10');
        let numeroRandom = Math.round(Math.random()*10);
        if (num < numeroRandom) {
            console.log(`El numero ingresado ${num} es menor que el numero aleatorio ${numeroRandom}`);
        } else if (num > numeroRandom) {
            console.log(`El numero ingresado ${num} es mayor que el numero aleatorio ${numeroRandom}`);
        } else if (num == numeroRandom) {
            console.log(`El numero ingresado coincide, ganaste ${numeroRandom}`);
        }
    } else if (nivelElegido == '2') {
        let num = prompt('Ingrese un numero de 1 a 20');
        let numeroRandom = Math.round(Math.random()*20);
        if (num < numeroRandom) {
            console.log(`El numero ingresado ${num} es menor que el numero aleatorio ${numeroRandom}`);
        } else if (num > numeroRandom) {
            console.log(`El numero ingresado ${num} es mayor que el numero aleatorio ${numeroRandom}`);
        } else if (num == numeroRandom) {
            console.log(`El numero ingresado coincide, ganaste ${numeroRandom}`);
        }
    } else if (nivelElegido == '3') {
        let num = prompt('Ingrese un numero de 1 a 30');
        let numeroRandom = Math.round(Math.random()*30);
        if (num < numeroRandom) {
            console.log(`El numero ingresado ${num} es menor que el numero aleatorio ${numeroRandom}`);
        } else if (num > numeroRandom) {
            console.log(`El numero ingresado ${num} es mayor que el numero aleatorio ${numeroRandom}`);
        } else if (num == numeroRandom) {
            console.log(`El numero ingresado coincide, ganaste ${numeroRandom}`);
        }
    } else {
        console.log('Numero ingresado invalido, solo existen 3 niveles')
    }
}
    
    niveles()