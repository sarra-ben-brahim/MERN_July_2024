// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);

const { performance } = require('perf_hooks');
const start = performance.now();

console.log(`The Fibonacci sequence of 20 first numbers is ${iFib(20)}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


//The Fibonacci sequence of 20 first numbers is 6765
//This took 4.373199999332428 milliseconds to run
//The fibonacci iterative is much faster than fibonacci recursive 