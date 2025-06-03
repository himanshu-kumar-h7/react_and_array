const rotateArray =(arr, k) =>{
   k =k % arr.length; 

   return[...arr.slice(k),...arr.slice(0,k)]
   
}




const newAray = rotateArray([1,2,3,4,5],6)
console.log(newAray)