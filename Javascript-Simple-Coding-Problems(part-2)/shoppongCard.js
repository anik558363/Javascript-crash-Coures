const products = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'chiruni', price: 100, quantity: 3},
    {name: 'shirt', price: 700, quantity: 5},
    {name: 'pant', price: 1200, quantity: 1}
]


function cartTotal(products){
    let sum = 0;
    for(const product of products){
        sum += product.price * product.quantity;
    }
    return sum;
}

console.log(cartTotal(products));