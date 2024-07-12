Number.prototype.isPrime2 = function () {
    let limit = Math.floor(this / 2);
    for (let i = 2; i <= limit; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

// calculate the 10.000th prime number

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 100000) {
    if (num.isPrime2()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// calculate the 100.000th prime number
//The 10,000th prime number is 104729
//This took 9515.932099997997 milliseconds to run

// calculate the 100.000th prime number


// calculate the 1.000.000th prime number

