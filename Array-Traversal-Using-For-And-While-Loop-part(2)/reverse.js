// [ 7, 6, 5, 4, 3, 2, 1]


const numbers = [1, 2, 3, 4, 5, 6, 7];

// -------------> 1

// console.log(numbers);
// numbers.reverse()
// console.log(numbers);




// -------------> 2

// let num = [];
// for(let number of numbers){
//    num.unshift(number)
// }
// console.log(num);



// -------------> 3

// const reverseNumbers = [];
// for(let i = 0; i < numbers.length; i++){
//    const num = numbers[i]
//    reverseNumbers.unshift(num)
// }
// console.log(reverseNumbers);



// -------------> 4

// decremental for loop

const reverseNumbers = [];

for(let i = numbers.length - 1; i >= 0; i--){
   // console.log(numbers[i]);
   reverseNumbers.push(numbers[i])
}

console.log(reverseNumbers);