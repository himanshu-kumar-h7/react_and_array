// const PairOfAGivenSum =(sum, arr) => {
//     let set = new Set(arr)
    
//     const pair = []
    
    
//     for (let i of arr){
//         let diff = sum - i
//         if(set.has(diff)){
//            pair.push([diff, i])
//         }
//         set.add(i)
//     }
// return pair
// }



const desired = (sum, arr) => {
     const set = new Set()
     const pair = []

     for(let i of arr){
        let diff = sum - i
        if(set.has(diff)){
            pair.push([i, diff])
        }
        set.add(i)
     }
     return pair
}

console.log(desired(5,[1,2,3,4,5]))