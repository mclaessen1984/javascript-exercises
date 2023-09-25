const fibonacci = function (n) {
    if (n < 0)
        return "OOPS";

    let fibo = [1, 1];

    while (fibo.length < n) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    }
    return fibo[fibo.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
