function addOnlyNumbs(...args) {

    let count = 0;

    for (const arg of args) {
        if (typeof arg === "number") {
            count += arg;
        }
    }

    return count;
}

console.log(addOnlyNumbs('hola',2,5,7,'prueba'));