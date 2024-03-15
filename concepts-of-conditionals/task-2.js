function BmiCalculator(weight, height){

    if(typeof weight != 'number' || typeof height != "number"){
       console.log('give me number');
    }else{
        let BMI = parseFloat((weight / (height)**2).toFixed(1));
        console.log(BMI);
        
        if(BMI < 18.5){
            console.log('underWeight');
        }else if(BMI >= 18.5 && BMI <= 24.9){
            console.log("normal");
        }
        else if(BMI >= 25 && BMI <= 29.9){
            console.log('overWeight');
        }
        else{
            console.log('otherWise, you are obese');
        }
        }
    }


BmiCalculator(55, 1.7018)