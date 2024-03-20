// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'
 
const sentences = ['Tom', 'Tim', 'Tin', 'Tik']

let newSen = '';

for(let sen of sentences){
    newSen += sen;
}

console.log(newSen);