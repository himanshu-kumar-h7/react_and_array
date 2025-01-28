// const ReduceArrayOf = (arr) => {
//     let sum = 0; // Initialize sum outside the loop to accumulate the total
//     for (let i = 0; i < arr.length; i++) { // Use a traditional `for` loop for proper indexing
//         sum += arr[i]; // Add the current element to the sum
//     }
//     return sum; // Return the accumulated sum
// };

// console.log(ReduceArrayOf([1, 2, 3, 4, 5, 4, 7])); // Output: 26


// Using reduce function

// const ReduceArrayOf = (arr) => {
// return arr.reduce((sum, num) => sum+num, 0)}
// console.log(ReduceArrayOf([1, 2, 3, 4, 5, 4, 7]));

// Using map function
const mapArray = (arr) =>{
   return arr.map((each) => {
        return each * 10
    })

}

console.log(mapArray([1, 2, 3, 4, 5, 4, 7]));

//Using 