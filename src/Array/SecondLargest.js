const secondLargest =(arr) => {
    let max= -Infinity, secondMax = -Infinity
    for(let i of arr){
        if (i > max){
            secondMax = max
        max = i
        }
        else if (i > secondMax && i !== max) {
                 i > -Infinity  && i !== -Infinity
            secondMax = i;
          }
            
        
    }
return secondMax
}

console.log(secondLargest([5,5,5,5,5,6,6]))