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