function insertionSort(arr){
    for(let i = 0; i< arr.length; i++){
        let numberToBeInserted = arr[i]
        let sorted = i - 1
        while(sorted >= 0 && arr[sorted] > numberToBeInserted){
            arr[sorted + 1] = arr[sorted]
            sorted = sorted - 1
        }
        arr[sorted + 1] = numberToBeInserted
    } 
    return arr

}

console.log(insertionSort([4,2,32,1,5,5,5,5,8,88,655,-1]))