function sumOfNumbersRecursion(n, start = 1, sum = 0){
    
    if(start >= n) return
    
    
    sum = sum + start
    
    
    console.log(`sum of number upto ${n} and ${start} is ${sum}`)
    sumOfNumbersRecursion(n, start + 1, sum)

}
console.log(sumOfNumbersRecursion(10))

//for( i = 0; i< 10; i++){
// sum = sum + i
// }

