// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
rFib(20);


const { performance } = require('perf_hooks');
const start = performance.now();

console.log(`The Fibonacci sequence of 20 first numbers is ${rFib(20)}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//The Fibonacci sequence of 20 first numbers is 6765
//This took 29.675500005483627 milliseconds to run

