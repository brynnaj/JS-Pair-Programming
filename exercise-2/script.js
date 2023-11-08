const plusone = function (arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1;

        newArray.push(arr[i]);
    }
    return newArray;
}

console.log(plusone([1, 2, 3]));


