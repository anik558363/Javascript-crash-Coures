// Task-5:
// Capitalize Every first Letter of each word in a String


const sentence = 'Capitalize Every first Letter of each word in a String';


const word = sentence.split(' ');

for(let i = 0; i < word.length; i++){
    word[i] = word[i][0].toUpperCase() + word[i].substring(1)
}

const w = word.join(' ')

console.log(w);

// console.log(word);

