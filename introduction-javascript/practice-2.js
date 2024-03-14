function average(math, biology, chemistry, physics, banGla){
    if(typeof math != 'number' || typeof biology != 'number' || typeof chemistry != 'number' || typeof physics != 'number' || typeof banGla != 'number' ){
        return 'provide me number'
    }else{
        let averageMark = (math + biology + chemistry + physics + banGla) / 5;
        return parseFloat(averageMark.toFixed(2))
    }
}


const ans = average(75.25, 65, 80, 35.45, 99.50)

console.log(ans);