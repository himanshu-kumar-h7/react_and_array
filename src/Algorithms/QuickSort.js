function QuickSort(arr) {
    if(arr.length < 2){
        return arr
    }
   
        let pivot = arr[(arr.length - 1)]
        let left = []
        let right = []
        for(let i = 0 ;i<arr.length - 1; i++){
            if(arr[i] > pivot){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        // console.log(left)
        // console.log(right)
    
    
    
    
    return [...QuickSort(left), pivot, ...QuickSort(right)];


}

console.log(QuickSort([4,2,32,1,2,5,5,5,8,88,655,3]))

// [1, 4, 5,  3,  9,  6]
// piovet 