function MergeSort(arr){
    if(arr.length < 2){
        return arr
    }

  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  
  return merge(MergeSort(left), MergeSort(right))

}

function merge(left, right){
    const result = []

    let i = 0
    let j = 0

    while(i < left.length && j < right.length ){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i).concat(right.slice(j)))
}

console.log(MergeSort([4,2,32,1,2,5,5,5,8,88,655,3]))