// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const sentence = 'If a given string has either x, replace x by y. if the given string has X, replace it by Y.';

console.log(sentence);


const newSentence = sentence.replace('x', 'y');

const newSentence1 = newSentence.replace("X", "Y");

console.log(newSentence1);