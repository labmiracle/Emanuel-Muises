function palabraMasLarga(str) {
    
    let palabras = str.split(' ');
    let palabraLarga = '';

    for (const palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }

    return palabraLarga;
}

console.log(palabraMasLarga('Erase una vez que se era'))

function primeraMayuscula(str) {

    let palabras = str.split(' ');

    return palabras.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');

}

console.log(primeraMayuscula('En un lugar de la Mancha'))