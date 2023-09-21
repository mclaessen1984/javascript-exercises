const repeatString = function(string, n) {
    let returnString = "";

    if (n < 0) {
        return "ERROR";
    }
    
    for (let i=0; i<n; i++) {
        returnString += string;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
