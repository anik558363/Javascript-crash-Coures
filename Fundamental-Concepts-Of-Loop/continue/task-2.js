/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/




// for(let num = 55; num <= 85; num++){
//     if(num % 2 === 1){
//        continue
//     }
//     console.log(num);
// }

let i = 55;

while(i <= 84){
    i++;
    if(i % 2 === 1){
        continue
    }
   console.log(i);
}