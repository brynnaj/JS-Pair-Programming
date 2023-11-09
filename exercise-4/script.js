function createMultiplier (multiplier) {
    return function (number) {
        return number * multiplier;
    };

}

const multiplyByFive = createMultiplier(10);
console.log(multiplyByFive(5));