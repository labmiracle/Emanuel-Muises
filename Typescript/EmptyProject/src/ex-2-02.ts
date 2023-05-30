function padLeft(value: string, padding: number | string): string {
    
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(' ')}${value}`
    } else if(typeof padding === 'string') {
        return padding + value;
    }
    return 'Ingrese valores validos'

}
    
console.log('[Ejercicio 4.2]', `
${padLeft('Absolute', 0)}
${padLeft('Lab', 'Miracle')}
${padLeft('Wars', 'Star')}
${padLeft('Posicion', 1)}
${padLeft('de Prueba', 'Ejercicios')}
`);