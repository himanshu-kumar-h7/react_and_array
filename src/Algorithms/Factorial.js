// 5 = 5 × 4 × 3 × 2 × 1 = 120

// function factorial(n){
   
//     if (n === 0) {return 1}
//     else{
//         return n * factorial(n - 1)
//     }

// }

// console.log(factorial(5))

function factorial(n){
    let result = 1
    for (let i = 2 ; i<= n ; i++){
        result = result * i
    }
    return result

}
console.log(factorial(4))

5 * 4 * 3 * 2 * 1

function fact(n){
    if(n < 1) return

   return n * fact(n - 1)

}