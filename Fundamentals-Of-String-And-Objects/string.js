// ---------------> string is immutable -----> not changeable


// array is mutable ----> you can change the array elements


const country = 'Bangladesh';
const division = 'Newkhale';
const district = `B-Baria`
const thana = new String('Demra');


// console.log(typeof country);
// console.log(typeof division);
// console.log(typeof district);



// console.log(typeof thana);
// console.log(thana);


const numbers = [54, 98, 78, 21, 65];
console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[0]);
// console.log(numbers[1]);
numbers[1] = 100;
console.log(numbers);



const capital = "Dhaka";
console.log(capital);
// console.log(capital.length);
// console.log(capital[0]);
// console.log(capital[1]);
// console.log(capital[2]);
capital[1] = 'A';
console.log(capital);

