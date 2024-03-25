const phones = [
    {name: 'Samsung', price: 12000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 18000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 3000, camera: '12mp', color: 'black'},
    {name: 'iPhone', price: 120000, camera: '12mp', color: 'black'},
    {name: 'Htc', price: 30000, camera: '12mp', color: 'black'}
]


// function getCheapest(phones){
//     let min = phones[0]
//     for(let phone of phones){
//         if(phone.price < min.price){
//             min = phone;
//         }
//     }
//     return min;
// }

// console.log(getCheapest(phones));


// -----------------------------------

function getMax(phones){
    let max = phones[0]
    for(const phone of phones){
       if(phone.price > max.price){
        max = phone;
       }
    }
    return max;
}

console.log(getMax(phones));