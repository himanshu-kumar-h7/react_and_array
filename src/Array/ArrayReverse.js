let arr = [1,2,3,4,5]
let arr2 = [23,24,34,555,676,450]


let reverse = (arr) => {
    let left = 0 
    let right = arr.length - 1

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    

    }
    return arr
}
console.log(reverse(arr))
// abc


