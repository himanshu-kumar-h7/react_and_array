// const removeDuplicate = (arr) => {
//     return[...new Set(arr)]
// }

// console.log(removeDuplicate([2,2,2,2,3,4,3,4,4,4]))


// const removeDuplicate2 = (arr) => {
//     const uniqueArray = [];
//     const elementAppeared = {};

//     for (let i =0 ; i<arr.length; i++){
//         if(!elementAppeared[arr[i]])
//             uniqueArray.push(arr[i])

//         elementAppeared[arr[i]] = true
//     }

//     return uniqueArray
// }
// const array = [22,22,22,3,2,3,4]

// console.log(removeDuplicate2(array))

const removeDuplicate3 = (arr) => {
    const uniqueArray = []
    const elementAppeared = []

    for(let i = 0; i<arr.length; i++){
         if(!elementAppeared.includes(arr[i]))
            uniqueArray.push(arr[i])
        elementAppeared.push(arr[i])
    }

    return uniqueArray
}

console.log(removeDuplicate3([33,2,3,4,5,33,3,33,3,3,3]))