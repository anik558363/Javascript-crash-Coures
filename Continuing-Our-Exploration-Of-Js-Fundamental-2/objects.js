// /**
//  * const objectName = {
//  *  propertyName : propertyValue,
//  * }
//  * 
//  * **/ 

// const myPet = {
//     name : 'Travis',
//     age : 2,
//     isMale : true,
//     food : "Fish",
//     color: "white",
//     'is married' : false,
    
// }

// const x= 'name';
// console.log(myPet[x]);



// // ------------->dot notation(object.propertyName)


// // console.log(myPet);
// // console.log(myPet.color);
// // console.log(myPet.name);
// // const catFood = myPet.food;
// // console.log(catFood);
// myPet.color = 'Black';
// // console.log(myPet);






// // ---------------->bracket notation(object['propertyName'])
// // const catFood = myPet['food'];
// // console.log(catFood);
// // console.log(myPet['is married']);
// myPet['is married'] =true;
// // console.log(myPet);



// // added new property
// // myPet.sound = "meo meow";
// // myPet['wight'] = '4-5kg'




// // deleted property

// delete myPet['isMale'];

// console.log(myPet);


// ------------------------------------------->




// const myPet = {
//     name : 'Travis',
//     age : 2,
//     isMale : true,
//     food : "Fish",
//     color: "white",
//     'is married' : false,
    
// }


// for(let key in myPet){
//     // console.log(key, typeof key);
//     console.log(myPet[key]);
// }



const student = {
    name : {
        firstName: 'anik',
        lastName : 'Mondal'
    },
    subjects : ['bangla', 'english'],
    isMale : true,
    roll : 558363 
}

// console.log(student.name.firstName);
console.log(student.subjects[1]);