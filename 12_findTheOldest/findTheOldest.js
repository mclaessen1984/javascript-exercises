const findTheOldest = function (people) {
    let oldest = null;

    for (person of people) {
        if (oldest == null)
            oldest = person;

        const personYod = person.yearOfDeath == undefined ? (new Date(Date.now())).getFullYear() : person.yearOfDeath;
        const personAge = personYod - person.yearOfBirth;
        const oldestYod = oldest.yearOfDeath == undefined ? (new Date(Date.now())).getFullYear() : oldest.yearOfDeath;
        const oldestAge = oldestYod - oldest.yearOfBirth;

        if (oldestAge < personAge)
            oldest = person;
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
