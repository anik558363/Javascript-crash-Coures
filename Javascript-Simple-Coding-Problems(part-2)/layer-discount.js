function layeredDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;


    if(quantity <= 100){
        const total = first100Price * 100;
        return total;
    }else if(quantity <= 200){
        const first100Total = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = second100Price * remainingQuantity;
        const total = first100Total + remainingTotal; 
        return total
    }else{
        const first100Total = first100Price * 100;
        const second100Total = second100Price * 100;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;

    }

}


console.log(layeredDiscount(201));