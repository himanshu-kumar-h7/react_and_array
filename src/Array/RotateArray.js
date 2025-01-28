const rotateArray =(arr, k) =>{
   k =k % arr.length; 

   return[...arr.slice(-2),...arr.slice(0,-2)]
   
}




const newAray = rotateArray([1,2,3,4,5],2)
console.log(newAray)