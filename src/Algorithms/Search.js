// function search(arr, number){
//     for(let i = 0; i<((arr.length)) ; i++){
//         if(arr[i] === number){
//             return i
//         }
        
//     }
//     return -1

// }
// console.log(search([1,2,3,4,5,6,7,8], 6))
 //O(1)

function search(arr, target){
    let left = 0
    let right = arr.length - 1
    
    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if(target === arr[mid]){
            return mid
        }
        if(target < arr[mid] ){
            right = mid - 1
        }else{
            left = mid + 1

        }
    }
    return -1 

}
console.log(search([1,2,3,4,5,6,7,8,9], 6))

// 6 < 5
