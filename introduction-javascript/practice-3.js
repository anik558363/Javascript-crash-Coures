function returnRemainder(num){
    if(typeof num != 'number'){
        return 'provide me number'
    }else{
        let remainder = num % 5;
        return remainder;
    }
}


const ans = returnRemainder("119")

console.log(ans);