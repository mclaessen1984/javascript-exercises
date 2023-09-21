const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        return "ERROR";
    }

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    const low = a < b ? a : b;
    const high = a > b ? a : b;

    var sum = 0;

    for (let i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
