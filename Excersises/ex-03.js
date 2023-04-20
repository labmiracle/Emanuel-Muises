function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    
    let alturaInicial = 0;
    let dias = 0;
    
    while (alturaDeseada > alturaInicial) {
        dias++;
        alturaInicial += velocidadCrecimiento - velocidadDecrecimiento;
    }

    return dias;
}

console.log(calcularDiasCrecimiento(4,2,4));