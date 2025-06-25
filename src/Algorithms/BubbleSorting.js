function BubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0 ; i< arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
           let temp = arr[i]
           arr[i] = arr[i + 1]
           arr[i + 1] = temp
           swapped = true
        }
      }
    } while(swapped)
        return arr
}

console.log(BubbleSort([4,2,32,1,5,5,5,5,8,88,655,-1]))