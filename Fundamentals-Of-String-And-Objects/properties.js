const person = {
    name : 'anik mondal',
    age : 25,
    profession: 'dev',
    salary : 25000,
    married : true,
    'fav places' : ['bandorban', 'saintmartin', 'kuakata']
}


// ------------> dot notation
// dot symbol diye object er property er value access kora


// console.log(person);
// console.log(person.profession);
// const income = person.profession;
// console.log(income);


// ---------> bracket notation
// third bracket diye access kora


console.log(person['profession']);
const boyos = person['age'];
console.log(boyos);
console.log(person['fav places']);