console.log("This is First")

setTimeout(() => {
    console.log("This is First 1")

    setTimeout(() => {
        console.log("This is First 2")
        setTimeout(() => {
            console.log("This is First 3")
        },2000)
    },2000)
},2000)