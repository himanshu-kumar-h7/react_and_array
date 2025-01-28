let arr = [2,3,223,4,53,2,44332,2334]

let max = arr[0];

for(let i = 0 ; i<arr.length; i++){
    if(max < arr[i])
        max = arr[i]
    i++
}

console.log(max)