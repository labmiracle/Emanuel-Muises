function combinarArreglos(arreglo1, arreglo2) {
    
    let arregloCombinado = [...arreglo1, ...arreglo2];
    
    return arregloCombinado;
}

console.log(combinarArreglos([1,'Francia',3,4,5],[6,'prueba',8,'hola','star wars']))