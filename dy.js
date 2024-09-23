let cache = {};

function fib(a) {
    if (a === 0) return 0;
    if (a === 1) return 1;
    if (cache[a] !== undefined) return cache[a];
    cache[a] = fib(a - 1) + fib(a - 2);
    return cache[a];
}

console.log(fib(50));
