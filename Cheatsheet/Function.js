console.log(`// normal:`)

function q1(t) {
    console.log(`function ${t}`)
}

q1(111111)

function q() {
    console.log(`!!!`)
}

console.log(`// function.name:`)
console.log("name:", q.name)

console.log(`// anonim:`)
let q2 = function () {
    console.log("!!!")
}
q2()

console.log(`// default parameter:`)

function w(title = "jnjnjnjn", i = 10) {
    console.log(`${title}--${i}`)
}

w()
w(1)
w("!", "ee")

console.log(`// function with ...:`)

function e(q, w, ...e) {
    console.log(`${q}--${w}--${e}`)
}

e(1, w = 2, 3, 4, 5, 6)

console.log(`// object as parameter:`)
let obj = {
    num: 1,
    txt: "fdfdfdf"
}

function r(
    {
        num = 0, txt = "!"
    }
) {
    console.log(`${num}--${txt}`)
}

r(obj)

console.log(`// arrow functions vs normal:`)
let i1 = x => console.log(++x)
let i2 = function (x) {
    console.log(++x)
}
i1(10)
i2(10)

let getTime = () => console.log(
    new Date().getHours(), ":", new Date().getMinutes()
)
getTime()

console.log(`// arrow functions with multiple params:`)
let funcConsole = (a, b) => console.log(`a = ${a}; b = ${b}`)
funcConsole(1, 'sdf')

const funcConsole2 = (a, b) => {
    c = a + b;
    console.log(c)
}
funcConsole2(1, 100)

console.log(`// Функция-генератор*:`)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/function*
function* genSeq() {
    yield 'a'
    yield 'b'
    return 'c'

}
let g = genSeq()
let val
while (!(val = g.next()).done) {
    console.log(val)
}
console.log(`// g.next():`)
console.log(g.next())

console.log(`// Функция-генератор*2:`)
function* genSeq2(res) {
    console.log(res)
    res = yield 'aa'
    console.log(res)
    res = yield 'bb'
    console.log(res)
    return 'cc'
}

let val2, i = 0
let g2 = genSeq2(i)
while (!(val2 = g2.next(i++)).done) {
    console.log(val2)
}
console.log(val2)