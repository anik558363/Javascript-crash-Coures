function add(num1, num2){
    const total = num1 + num2;
    return total; 
}

function sub(num1, num2){
    const total = num1 - num2;
    return total;
}

function mul(num1, num2){
    const total = num1 * num2;
    return total;
}

function div(num1, num2){
    const total = num1 / num2;
    return total;
}



function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'sub'){
        const result = sub(a, b);
        return result;
    }
    else if(operation === 'mul'){
        const result = mul(a, b);
        return result;
    }
    else if(operation === 'div'){
        const result = div(a, b);
        return result;
    }
    else{
        return `Only 'add', 'sub', 'mul', 'div' operation is allowed`
    }
}


console.log(calculator(4, 2, 'mul'));