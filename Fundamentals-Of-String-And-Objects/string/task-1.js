// Task-1:
// Count how many times a string has the letter a


const sentence = 'Count how many times a string has the letter a'
let count = 0;

for(let sen of sentence){
    if(sen.includes('a')){
        count += 1;
    }
}

console.log(count);