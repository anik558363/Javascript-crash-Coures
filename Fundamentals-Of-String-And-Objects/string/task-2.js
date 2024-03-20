// Task-2:
// Count how many times a string has the letter a or A


const sentence ='Count how many times a string has the letter a or A';
let count = 0;

for(let sen of sentence){

    if(sen.includes('a') || sen.includes("A")){
        count += 1;
    }

}

console.log(count);
