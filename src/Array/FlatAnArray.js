const FlatArray = (Original) => {
    let result = []

    for(let i = 0; i < Original.length; i++){
        if(Array.isArray(Original[i])){
            result = result.concat(FlatArray(Original[i]))
        } else{
            result.push(Original[i])
        }
    }
    return result
    

}

const Original = [1,[2,3],[4,5,6]]

console.log(FlatArray(Original)); 