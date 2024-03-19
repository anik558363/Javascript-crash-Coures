let num = 1;
let sum = 0;

while(num <= 10){
    console.log(num);

    if(num % 2 === 0){
        sum += num;
    }

    num++;
}

console.log("sum :", sum);