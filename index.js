// var age = 24; letter A - Z || 0 - 9 || Underscore || $

// console.log(age);


// var age = 24;

// console.log(typeof age); ----number


// var name = 'anik';

// console.log(typeof name); ----string


// var status = true;

// console.log(typeof status); ---boolean


// var num1 = 30.214;

// console.log(parseInt(num1)); ----parseint

// var num1 = 30.5;
// var num2 = 15.8;

// var sum = parseFloat(num1 + num2)
// var sum = parseInt (num1 + num2)


// console.log(sum);


// var num1 = '30.5';
// var num2 = 15.8;

// var sum = parseInt(num1) + num2; ----type-conversion

// console.log(sum);




// var nanak = 'anik'


// if(nanak === 'Hero aliom'){
//     console.log('nakak is true');
// }else if(nanak === "anik"){
//     console.log('anik hoicay student');
// }else{
//     console.log('anik kico pareay na');
// }



// var name = 'hero alom';


// if ( 0 > 1){
//     console.log('yesss 0 1 boro');
// }else if (1 > 0){
//     console.log('yess 1 0 zeror theke boro');
// }

// else {
//     console.log('vai amei are check korte parbo na');
// }


// var age = 24;


// if(age >= 30){
//     console.log('tumei ekto boro');
// }else if(age <= 20){
//     console.log('tumei ekto chto');
// }else{
//     console.log('tuemi medium people');
// }




// var person = {
//     name : 'anik',
//     age : 24,
//     hight : 5.6
// }


// for(i in person){
//     console.log(person[i]);
// }


// console.log(person);
// console.log(typeof person);
// console.log(person.age);

// var age = person.age;

// console.log(age);



// var number = [1, 2, 3, 4, 5, 6, 7, person]


// console.log(number[7].name);

// console.log(number.length);

// console.log(number.indexOf(person));

// number.push('anik');
// number.pop()

// // number.shift()
// number.unshift('ritu')

// console.log(number);


// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// var number = ["anik", "joy", "apu"];


// for(let i = 0; i < number.length; i++){
//     console.log(number[i]);
// }

// for(i of number){
//     console.log(i);
// }



// for (let index = 0; index <= 5; index++) {
//     if(index === 2){
//         console.log('paice toreay');
//     }else{
//         console.log('doro painai');
//     }
    
// }



// // var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var number = ['anik', 'apu', 'arpon']

// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     if(element === 'anik'){
//         console.log('paiciii tore');
//     }else{
//         console.log('painai');
//     }
// }



// function addToNumber(){
//     console.log(10 + 20);
// }

// addToNumber()


function addToNumber(a , b){
    sum = a + b;
    return sum;
}

let total = addToNumber(10, 20)

console.log(total);