// function PowerOf2(n){
//     if(n<1) return false
//     while(n % 2 === 0){
//         n=n/2
//     }
//     return n === 1

// }
// console.log(PowerOf2(64))

//8 = 2^3 or 2*2*2
//3 = no

// function PowerOf2(n) {
//     if(n < 1) return false;
//     while(n > 1){
//         if(n % 2 !== 0){
//             return false
//         }
//         n = n / 2
//     }
//     return true

// }
// console.log(PowerOf2(64))


function PowerOf2(n){
    if(n< 1) return false;
    else{
        return (n & (n-1)) === 0
    }
}
console.log(PowerOf2(32))

