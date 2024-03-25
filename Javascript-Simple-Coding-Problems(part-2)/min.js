const prices = [51000, 44000, 30000, 70000];

function getMin(prices){
    let min = prices[0]
    for(const price of prices){
        if(price < min){
            min = price;
        }
    }
    return min

}

console.log(getMin(prices));