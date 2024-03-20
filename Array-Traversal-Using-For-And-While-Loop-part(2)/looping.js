/**
 * 
 * LOPING Technique
 * 
 * 1. for loop
 * 2. while loop
 * 3. do while -----> ignore
 * 4. for of --------> array loop korar jonno
 * 5. for in --------> objects loop korar jonno
 * 
 * 
 * **/ 


const friends = ['Elon', 'Bill', "mark", 'waren'];

// for(const friend of friends){
//     console.log(friend);
// }



for(let i = 0; i < friends.length; i++){
    // console.log(friends[i]);
}


const numbers = [10, 20, 88, 79, 36, 14, 45, 77];

// for(let i = 0; i < numbers.length; i++){
//     // console.log(numbers[i]);
// }


let i = 0;

// while(i < friends.length){
//     console.log(friends[i]);
//     i++;
// }



while (i < numbers.length) {
    // console.log(numbers[i]);
    i++
}



// reverse


// for(let i = friends.length - 1; i >= 0; i--){
//     console.log(friends[i]);
// }