// const heights = [22, 44, 56, 88, 74];

// let maxTallest = heights[0];

// for(let height of heights){
//     if(maxTallest < height){
//         maxTallest = height;
//     }
// }

// console.log(maxTallest);


// ------------------------------


const heights = [22, 44, 56, 11, 88, 74, 13131];

// function getMax(heights){
//     let max = heights[0];
//     for(let height of heights){
//         if(height > max){
//             max = height;
//         }
//     }
//     return max;
// }


// const ans = getMax(heights);
// console.log(ans);


// ------------------------------


function getMin(heights){
    let min = heights[0];
    for(const height of heights){
        if(min > height){
            min = height;
        }
    }
    return min;
}

console.log(getMin(heights));