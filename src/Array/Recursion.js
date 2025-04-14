// Factorial of a number

// n! = n * (n-1) * (n-2) * ... * 1

// 5 = 5 * (5-1) * (5-2) * (5-3) * (5-4)
// 5 = 5 * 4 * 3 * 2 * 1

let Factorial = (num) => {
    
    if(num === 0){
     return 1
    }
    else{
        return  num * Factorial(num - 1)
    }

}

console.log(Factorial(5))

