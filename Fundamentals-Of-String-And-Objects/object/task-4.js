// Task-4
// Count the number of properties.

// Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// let properties = 0;

// for(key in student){
//    properties += 1;
// }

// console.log(properties);


const key = Object.keys(student);
console.log(key.length);