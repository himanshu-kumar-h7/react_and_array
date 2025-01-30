const secondLargest =(arr) => {
    let max = -Infinity, secondMax = -Infinity
    for(let i of arr){
        if(i > max){
            secondMax = max
             max = i
             
        }
        else if(i > secondMax && i !== max){
             secondMax = i
        }
    }
return secondMax
}

let arr = [5,6,343333,4444,33333,33334,33333]
let second = secondLargest(arr)
console.log(second)
