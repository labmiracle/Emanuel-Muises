function onlyUniques(...args) {
    
    let conjunto = new Set(arr);

    let unicos = [...conjunto];

    return unicos;
}

let arr = [1,2,3,4,5,4,6,2,3,1,10];

console.log(onlyUniques(arr));