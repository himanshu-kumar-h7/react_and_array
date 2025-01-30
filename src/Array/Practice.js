// Arrawreverse

// const reverse =(arr) => {
// let left = 0
// let right = arr.length -1 

// while(left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]

//     left ++
//     right --
// }
// return arr
// }

// let arr = [1,2,3,4,5]

// console.log(reverse(arr))

//String



const value = (str) => {
    let reversdString = ''
    
    for(let i = str.length; i>=0 ; i--){
        reversdString  += str.charAt(i)

    }
       return reversdString


}
const str = "HIMANSHU"
value(str)

let reversed = value(str)
console.log(reversed)



