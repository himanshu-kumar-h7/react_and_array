function numberReverseRecursion(n, end = 0){
    if(n <= end) return

    console.log(n)
numberReverseRecursion(n - 1)
}
console.log(numberReverseRecursion(5))