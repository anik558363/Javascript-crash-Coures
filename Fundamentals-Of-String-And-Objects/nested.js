const college = {
    name : 'vnc',
    class : [11, 12],
    events : ['science fair', 'bijoy dibos', '21 Feb'],
    unique : {
        color : 'blue',
        result : {
            gpa : 5,
            merit : 'top'
        }
    }
}

// college.unique.result['merit'] = 'top top....'
// college.events[1] = '16 December'
// console.log(college.unique['result'].gpa);

delete college.unique;

console.log(college);