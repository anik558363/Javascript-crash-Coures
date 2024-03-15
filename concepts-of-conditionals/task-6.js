function markCalculator(age, price, isStudent){

    if(typeof age != 'number' || typeof price != 'number'){
       console.log('give me number');
    }
    else{
        if(age < 10){
            console.log('ticket price free');
        }else if(isStudent == true){
            // 50% discount 
            let discount = price * 50 / 100;
            let payAmount = price - discount;
            console.log(payAmount);
        }
        else if(age >= 60){
            // 15% discount
            let discount = price * 15 / 100;
            let payAmount = price - discount;
            console.log(payAmount);
        }
        
        else{
            console.log('ticket price: ', price);
        }
    }



}


markCalculator(62, 800, isStudent = false);