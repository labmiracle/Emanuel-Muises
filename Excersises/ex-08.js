function suma (...args) {
    
    let suma = 0;

    for (const arg of args) {
        suma += arg;
    }

    return suma;
}

console.log(suma(6,3,2,5));