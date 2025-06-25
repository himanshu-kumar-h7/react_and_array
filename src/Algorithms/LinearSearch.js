function LinearSearch(n){
    const arr = [1,2,3,4,5,6,7,8,6,5,4,5,6,34535,342,32]
    for(let i = 0; i< arr.length; i++){
        if (arr[i] === n)
        return i
    
    }
    return -1

}

console.log(LinearSearch(5))