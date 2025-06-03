const str = "I am a boy"

const str2 = "a boy I am"

const rotate = (str, times) => {
    const words = str.split(' ')
    const len = words.length
    const ActualRotate = times % len
    const Rotated = words.splice(ActualRotate).concat(words.splice(0, ActualRotate))
    return Rotated.join(" ")

}

console.log(rotate(str, 2))
