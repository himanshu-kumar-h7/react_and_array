const promise1 = (id) => {
    return new Promise((resolve, reject) => {
        if(!id){
            console.log("Error in ID")
        }else{
            console.log(`${id} and name: Himanshu`)
        }
    })
}

promise1(2)
.then((resolve) => {console.log(resolve)})
.catch((error) => console.log(error))
.finally(() => console.log("I am closing"))