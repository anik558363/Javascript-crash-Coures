// function markCalculator(num1, num2){

//     if(typeof num1 != 'number' || typeof num2 != 'number'){
//        console.log('give me number');
//     }else{
//         let  result;
        
//         if(num1 > num2){
//             return result = num1 * 2;
//         }else{
//             return result = num1 + num2;
//         }
//     }


// }

// console.log(markCalculator(1, 1));



function markCalculator(num1, num2){

    if(typeof num1 != 'number' || typeof num2 != 'number'){
       console.log('give me number');
    }else{
       num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2);
    }


}

markCalculator(2, 1)