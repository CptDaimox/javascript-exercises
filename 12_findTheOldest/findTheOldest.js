const findTheOldest = function (array) {
  return array.reduce((prePerson, curPerson) => {
    return calcAge(prePerson.yearOfBirth, prePerson.yearOfDeath) < calcAge(curPerson.yearOfBirth, curPerson.yearOfDeath)
      ? curPerson
      : prePerson;
  });
};

const calcAge = (birth, death) => (!death ? new Date().getFullYear() - birth : death - birth);

// Do not edit below this line
module.exports = findTheOldest;
