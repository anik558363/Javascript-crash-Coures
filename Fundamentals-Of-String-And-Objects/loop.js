const mobile = {
   brand : 'samsung',
   price : 'black',
   camera : '12mp',
   isNew : true
}


// for of : array
// for in : object 


// for(let key in mobile){
//     // console.log(key);
//     console.log(mobile[key]);
// }


const keys = Object.keys(mobile);

for(const key of keys){
    console.log(key, ':', mobile[key])
    // console.log(mobile[key]);
}