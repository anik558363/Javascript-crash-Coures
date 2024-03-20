const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);



// sort ---->

// const numbers = [4, 7, 2, 38, 13, 56];

/**
 * 
 * Ascending -------> smaller to larger: [2, 3, 4, 6, 7, 8]
 * Descending ------> larger to smaller: [8, 7, 6, 4, 3, 2]
 * 
 * **/ 


const numbers = [4, 7, 2, 38, 13, 56];


  const numbers_asc = [...numbers].sort(function(a, b){ return a - b});
  const numbers_dsc = [...numbers].sort(function(a, b){ return b - a});

console.log(numbers_asc);
console.log(numbers_dsc);