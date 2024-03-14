function returnMoney(oranges, apples){
    if(typeof oranges != 'number' || typeof apples != 'number'){
        return 'provide me number'
    }else{
        let myMoney = 1000;
        let totalCost = oranges + apples;
        myMoney -= totalCost;

        return myMoney;

    }
}


let ans = returnMoney(350, 350)

console.log(ans);


console.log(typeof 20);