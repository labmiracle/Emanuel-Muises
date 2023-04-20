function suma(arreglo, n) {

    let sum = 0;

    for( let i = 0; i <= n - 1; i++){
        if (n > arreglo.length){
            return "N° supera la longitud del parámetro arreglo";
        }
        else{
            sum += arreglo[i] 
        }      
    }

    return sum
}
console.log(suma([1,2,3,4,5], 4));