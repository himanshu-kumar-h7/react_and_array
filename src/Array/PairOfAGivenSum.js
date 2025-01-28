const PairOfAGivenSum =(original, arr) => {
    let set = new Set()
    const pair = []
    
    for (let i of arr){
        let diff = original - i
        if(set.has(diff)){
           pair.push([diff, i])
        }
        set.add(i)
    }
return pair
}

console.log(PairOfAGivenSum[1,2,3,4,5],5)