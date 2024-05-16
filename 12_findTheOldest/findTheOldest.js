const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const calculateAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = (people) => {
  let oldestPerson = null;
  let minBirthYear = Infinity;

  for (const person of people) {
    if (person.yearOfBirth < minBirthYear) {
      minBirthYear = person.yearOfBirth;
      oldestPerson = person;
    }
  }

  for (const person of people) {
    let personAge = calculateAge(person.yearOfBirth, person.yearOfDeath);
    let oldestAge = calculateAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);

    if (person.yearOfDeath !== undefined && personAge > oldestAge) {
      oldestPerson = person;
    }
  }

  return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
