console.log("//start")

var i = 6 + 7
ii = 3

console.log(`//let l = 5:`)
{
    let l = 5
    p(l)
    p(i)
}
//p(l)  //ReferenceError: l is not defined

let c = 78

//c= 23   //TypeError: Assignment to constant variable.

function p(...param) {
    console.log(param)
}

//String

x1 = "dfdf '12' gggg"
x2 = 'hhhhh "00" wqq'
console.log(`x1 x2:`)
p(x1, x2)

let t1 = "man"
let t2 = "ice"

let sentence = `I am a ${t1} 
and like ${t2}
`
console.log(`//sentence1:`)
console.log(sentence)
console.log(`//sentence2:`)
console.log(sentence.includes(t1))
console.log(`//sentence3:`)
console.log(sentence.endsWith(t2))
console.log(`//sentence4:`)
console.log(sentence.startsWith(t1))
console.log(`//sentence5:`)
console.log(sentence.repeat(3))

//if
console.log(`// let y:`)
let y
//let y=undefined   //or
if (!y)
    p("undefined!!!")

console.log(`// z = 2:`)
let z = 2
if (z == "2")
    p("equal!")

console.log(`// z === "2":`)
if (z === "2")
    p("equal!")
else
    p("not equal!!")

console.log(`// var u = 0:`)
var u = 0
switch (u) {
    case 0:
        p("u = ", 0)
    //break
    case 2:
        p("u = ", 2)
        break
    default:
        p("not equal")

}

//for / while / do while