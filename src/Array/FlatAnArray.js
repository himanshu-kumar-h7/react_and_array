 let arr = [[1,2],[3,4],[5,[6,7,[8,9]]]]


 let Flat = (arr, depth = 1) => {
    return arr.reduce((acc, num) => {
        if(Array.isArray(num) && depth > 0){
            acc.push(...Flat(num, depth - 1))
        } else{
            acc.push(num)
        }
        return acc
    },[])

 }