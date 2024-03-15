function freeCoke(price){
    if(typeof price != 'number'){
        return 'give me number'
    }else{
        if(price >= 500){
            return "you have win free coke"
        }else{
            return price + 30;
        }
    }

}


console.log(freeCoke(500));