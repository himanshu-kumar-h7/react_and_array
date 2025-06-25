// const fibonacci = (upto) => {
//  let n1 = 0, n2 = 1
 
//  let n3 = 0

//  for (i=0;i<=upto;i++){
//     // console.log(n1)
//     n3 = n1 + n2
    
//     n1=n2
//     n2=n3
//     return n1
//  }


// }

// fibonacci(10)


//Using Array

// function fibonacci(n) {
//     const fibo = [0, 1]
//     for(let i = 2; i< n; i++){
//        fibo[i] = fibo[i - 1] + fibo[i - 2] 
//     }
//     return fibo

// }
// const abc = fibonacci(10)
// console.log(abc)


//Finding nth fibonacci number 

function nth(n){
    const fib =[0, 1]
    for(let i = 2; i<=n ; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[n]

}
console.log(nth(9))
