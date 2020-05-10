console.log("start")

var i = 6 + 7
ii = 3

{
    let l = 5
    p(l)
}
//p(l)  //ReferenceError: l is not defined

const c = 78

//c= 23   //TypeError: Assignment to constant variable.

function p(...param) {
    console.log(param)
}

//String

x1 = "dfdf '12' gggg"
x2 = 'hhhhh "00" wqq'
p(x1, x2)

let t1 = "man"
let t2 = "ice"

let sentce = `I am a ${t1} 
and like ${t2}
`
console.log(sentce)
console.log(sentce.includes(t1))
console.log(sentce.endsWith(t2))
console.log(sentce.startsWith(t1))
console.log(sentce.repeat(3))

//if
let y
//let y=undefined   //or
if (!y)
    p("undefined!!!")

let z = 2
if (z == "2")
    p("equal!")

if (z === "2")
    p("equal!")
else
    p("not equal!!")

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

//Array










