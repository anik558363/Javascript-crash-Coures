function markCalculator(mark, friendMark){

    if(typeof mark != 'number'){
       console.log('give me number');
    }else{
       if(mark >= 80){
        if(friendMark >= 80){
            console.log('go to the lunch');
        }else if(friendMark > 80 || friendMark >= 60){
            console.log('good luck next time');
        }
        else if(friendMark > 60 || friendMark >= 40){
            console.log('friend message unseen');
        }
        else{
            console.log('friend number block');
        }
       }else{
    console.log('i have a sad mod');
    }
    }


}

markCalculator(80, 33)