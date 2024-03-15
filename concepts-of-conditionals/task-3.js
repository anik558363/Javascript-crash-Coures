function markCalculator(mark){

    if(typeof mark != 'number'){
       console.log('give me number');
    }else{
        if(mark >= 90 && mark <= 99){
            console.log('A');
        }
        else if(mark >= 80 && mark <= 89){
            console.log('B');
        }
        else if(mark >= 70 && mark <= 79){
            console.log('C');
        }
        else if(mark >= 60  && mark <= 69){
            console.log('D');
        }
        else{
            console.log('you are fail');
        }
    }

}


markCalculator(99)