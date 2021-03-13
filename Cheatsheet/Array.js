function p(...param) {
    console.log(param)
}

//import * as h from './hello';

var x = []
var x2 = [1, 2, 3]
var x21 = new Array(11, 22, 33)

console.log(`// x21:`)
x21.forEach(function (t) {
    console.log(t)
})

var x3 = [
    1.2,
    "dfdfd",
    false,
    function (...t) {
        p(t)
    }]
console.log(`// x3:`)
p(x3)

console.log(`// for x3:`)
for (let i = 0; i < x3.length; i++) {
    p(x3[i])
}

console.log(`// вызов функции из x3[3]:`)
x3[3]("jkjjkjk")

var v = []
v[2] = 10
v[4] = "hhhhh12UUU"
v[6] = false

console.log(`// in v:`)
for (key in v) {
    p(key, v[key])
}

console.log(`// of v:`)
for (key of v) {
    p(key, v[key])
}

console.log(`// Hello:`)
text = "Hello"
for (let char of text) {
    p(char)
}

console.log(`// console v:`)
console.log(v)

console.log(`// valueOf:`)
console.log(v.valueOf())

console.log(`// toString:`)
console.log(v.toString())

console.log(`// join:`)
var n = [1, 2, 3, 4]
p(n.join("---"))

//stack
console.log(`// stack pop:`)
var m = ["a", "b", "c"]
m.pop()
p(m)

console.log(`// stack push:`)
m.push("d")
p(m)

console.log(`// stack shift:`)
m.shift()
p(m)

console.log(`// stack unshift A:`)
m.unshift("A")
p(m)

console.log(`// splice:`)
var q = [10, 20, 30, 40]
q.splice(2, 2, "A", "B")
p(q)
p(q.splice(0, 2))

console.log(`// concat:`)
w1 = [1, 2]
w2 = [3, 4]
p(w1.concat(w2))

console.log(`// sort:`)
e = [10, 5, 20]
p(e.sort())

console.log(`// reverse:`)
p(e.reverse())

console.log(`// sort function:`)
p(e.sort(
    function (a, b) {
        return a - b
    }
))