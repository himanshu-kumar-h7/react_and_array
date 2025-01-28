// let arr = [1,2,3,4,56,6,7,5]

// let sum = 0;

// for(i=0; i<arr.length; i++){
//     sum+= arr[i]
// }

// console.log(sum)


const sumArray = (arr) => {
    let sum = 0;

    for(i=0; i<arr.length; i++){
        sum+= arr[i]
    }
    return sum
    
}
console.log(sumArray([1,2,3,4,5]))
