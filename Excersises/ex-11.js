function onlyUniques(...args) {

    let result = [];

    for (let obj of arr) {
        if (!result.includes(obj)) {
            result.push(obj);
        }
    }

    return result;
}

let arr = [1,2,3,4,5,4,6,2,3,1,10];

console.log(onlyUniques(arr));