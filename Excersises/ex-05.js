function camelize(str) {

    let string = str.split(' ');
    
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }

    let camelize = string.join('');
    let stringCamelize = camelize.charAt(0).toLowerCase() + camelize.slice(1);

    return stringCamelize;

}

console.log(camelize('Hola a todos que tal'))