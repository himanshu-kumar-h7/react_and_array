const x = {
    a: 1, b: 2
}
x.c = 6
let key = "d";
x[key] = "himanshu"

console.log(x)

const y = {
    a:2, b: 5
}

Object.freeze(y)
const newY = {...y, c: 10}
const newY1 = Object.assign({}, y, {d: 8})

console.log(newY1)

