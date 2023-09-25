const palindromes = function (string) {
    const cleanString = string.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();

    for (var i=0; i<cleanString.length;i++) {
        if (cleanString[i] != cleanString[cleanString.length - (i + 1)]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
